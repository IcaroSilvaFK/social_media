import {useState} from 'react'

export function usePassword(){
  const [isPassword, setIsPassword] = useState(true);

  function handleChangePasswrodVisible(){
    setIsPassword(prev => !prev)
  }

  return {
    isPassword,handleChangePasswrodVisible
  }
}