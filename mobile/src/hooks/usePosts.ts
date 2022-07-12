import {useState, useEffect} from 'react'
import { api } from '../configs/axios'

interface Posts{
  created_at: string,
	description: string
	id:string
	image_cover:string|null,
	updated_at: string
	user: {
    id: string;
    username:string
    avatar_url: {
      avatar: string 
    } | null
  }
}

export function usePosts(){
  const [posts,setPosts] = useState<Posts[]>([])
  const [isError, setIsError] = useState(false)
  console.log(posts)
  useEffect(() =>{
    (async () => {
      try{
        const { data } = await api.get('/post')
        setPosts(data)
      }catch(err){
        setIsError(true)
      }
    })()
  },[])
  return {
    posts,isError
  }
}