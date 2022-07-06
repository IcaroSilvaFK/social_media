import { useNavigation } from '@react-navigation/native';

type Routes = 'Login' | 'Create' | 'Home' | 'Profile';

export function useNavigate() {
  const { navigate } = useNavigation();

  function push(route: Routes) {
    navigate(route);
  }

  return { push };
}
