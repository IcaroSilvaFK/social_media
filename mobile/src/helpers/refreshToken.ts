import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../configs/axios";

export async function refreshToken(id:string){
    const oldToken = await AsyncStorage.getItem('@token:social')
    if(!oldToken || !id) return;
    const {data} = await api.post('/auth/refresh/token',{
      userId: id,
      oldToken
    });
    await AsyncStorage.setItem('@token:social', data.token)
}