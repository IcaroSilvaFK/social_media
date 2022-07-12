import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://e54e-186-250-73-107.sa.ngrok.io/',
});

// api.interceptors.request.use(async (config) => {
//   try {
//     const tokenLocal = await AsyncStorage.getItem('@user:social');
//     config.headers = {
//       authorization: `Bearer ${tokenLocal}`,
//     };
//     return config;
//   } catch (err) {
//     return config;
//   }
// });
