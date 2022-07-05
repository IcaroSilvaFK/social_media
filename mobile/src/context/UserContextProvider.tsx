import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../configs/axios';

interface IUserLoginProps {
  email: string;
  password: string;
}

interface IUserCreateProps extends IUserLoginProps {
  username: string;
}

interface IUserProps {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface IUserContextProps {
  user: IUserProps | null;
  Login(data: IUserLoginProps): void;
  Create(data: IUserCreateProps): void;
}

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUserProps | null>(null);

  useEffect(() => {
    (async () => {
      if (user) {
        await AsyncStorage.setItem('@user:social', JSON.stringify(user));
      }
    })();
  }, [user]);

  useEffect(() => {
    (async () => {
      const userLocal = await AsyncStorage.getItem('@user:social');

      if (!user && userLocal) {
        setUser(JSON.parse(userLocal));
      }
    })();
  }, []);

  const Login = useCallback(async (userProps: IUserLoginProps) => {
    try {
      const { data } = await api.post('/auth/user/login', userProps);
      const { user, token } = data;
      await AsyncStorage.setItem('@token:social', token);
      setUser(user);
    } catch (err) {}
  }, []);

  const Create = useCallback(async (userProps: IUserCreateProps) => {
    try {
      const { data } = await api.post('/auth/user/create', userProps);
      const { user, token } = data;
      await AsyncStorage.setItem('@token:social', token);
      setUser(user);
    } catch (err) {}
  }, []);

  return (
    <UserContext.Provider value={{ user, Login, Create }}>
      {children}
    </UserContext.Provider>
  );
}
