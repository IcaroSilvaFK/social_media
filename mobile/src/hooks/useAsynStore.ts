import {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStore<T>(keyName:string,value:T): [T, boolean]{
  const [storeValue, setStoreValue] = useState<T>(value)
  const [isError,setIsError] = useState(false)

  useEffect(() => {
    (async () =>{
      try{
        await AsyncStorage.setItem(keyName,JSON.stringify(value))
      }catch(err){
        setIsError(true)
      }
    })()
  },[storeValue])

  useEffect(() => {
    (async () => {
      try{
        const localValue = await AsyncStorage.getItem(keyName)
        if(!localValue) return;
        setStoreValue(JSON.parse(localValue))
      }catch(err){
        setIsError(true)
      }
    })()
  },[])

  return [storeValue,isError]

}