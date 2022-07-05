import { useContext } from 'react';

import { UserContext } from '../context/UserContextProvider';

export function useUser() {
  const data = useContext(UserContext);

  return data;
}
