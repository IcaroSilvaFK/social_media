import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../configs/axios';
import { refreshToken } from '../helpers/refreshToken';

interface IUserLoginProps {
  email: string;
  password: string;
}

interface IUserCreateProps extends IUserLoginProps {
  username: string;
}

interface IResponseUser {
  email: string;
  _count: {
    follows: number;
  };
  createdAt: Date;
  username: string;
  id: string;
  avatar_url: {
    avatar: string;
  } | null;
}

interface IUserContextProps {
  user: IResponseUser | null;
  Login(data: IUserLoginProps): void;
  Create(data: IUserCreateProps): void;
  isError: boolean;
  setUser: (user: IResponseUser) => void;
  refetch(): void;
}
export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IResponseUser | null>(null);
  const [isError, setIsError] = useState(false);
  const [isRefetch, setIsRefetch] = useState(false);

  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await api.get(`user/${user.id}`);
        console.log(data.user);
        setUser(data.user);
      })();
    }
  }, [isRefetch]);

  useEffect(() => {
    (async () => {
      if (user) {
        await AsyncStorage.setItem('@user:social', JSON.stringify(user));
      }
    })();

    return () => {
      (async () => {
        await AsyncStorage.removeItem('@user:social');
        await AsyncStorage.removeItem('@token:social');
      })();
    };
  }, [user]);

  useEffect(() => {
    if (user) {
      setInterval(() => refreshToken(user.id), 600000);
    }

    (async () => {
      const userLocal = await AsyncStorage.getItem('@user:social');

      if (!user && userLocal) {
        setUser(JSON.parse(userLocal));
      }
    })();
  }, []);

  const Login = useCallback(async (userProps: IUserLoginProps) => {
    try {
      const { data } = await api.post('user/login', userProps);
      const { user, token } = data;
      await AsyncStorage.setItem('@token:social', token);
      setUser(user);
    } catch (err) {
      setIsError(true);
    }
  }, []);

  const Create = useCallback(async (userProps: IUserCreateProps) => {
    try {
      const { data } = await api.post('user', userProps);
      const { user, token } = data;

      await AsyncStorage.setItem('@token:social', token);
      setUser(user);
    } catch (err) {
      setIsError(true);
    }
  }, []);

  function refetch() {
    setIsRefetch((prev) => !prev);
  }

  return (
    <UserContext.Provider
      value={{ isError, user, Login, Create, setUser, refetch }}
    >
      {children}
    </UserContext.Provider>
  );
}
