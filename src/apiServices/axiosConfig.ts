import { COOKIE_TOKEN_KEY } from './../constants/index';
import axios from 'axios'
import cookies from '../Cookies/cookies'

declare module 'axios' {
     interface AxiosInstance
     {
        setAccessToken: (token:string) => void,
        getTokens: () => any,
        refreshAccessToken: () => Promise<any>
     }

     interface AxiosRequestConfig{
        _retry?:boolean
     }
}

const defaultAxios = axios.create({
    baseURL: import.meta.env.VITE_API_HOST || 'http://locahost:3001',
    headers:{
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": ""
    }
})


defaultAxios.getTokens = () =>{
    let token = cookies.get(COOKIE_TOKEN_KEY)
    return token
}

defaultAxios.refreshAccessToken = async () =>{
    let token = cookies.get(COOKIE_TOKEN_KEY)
    return new Promise(async (resolve, reject)=>{
        if(!token) reject(new Error("refresh token not exist"))      
        try {
            let res = await defaultAxios.post('/refresh-token',{refreshToken: token.refreshToken})
            resolve(res.data.data)
        } catch (error) {
            reject(error)
        }
    })
}

defaultAxios.interceptors.request.use((config)=>{
    let tokens = defaultAxios.getTokens()
    if(tokens && config.headers)
    {
        config.headers['Authorization'] = `Bearer ${tokens.accessToken}`
    }
    return config
})

defaultAxios.interceptors.response.use((response)=>{
    let {status, config} = response
    if(status === 401 && !config._retry)
    {
        config._retry = true
        return defaultAxios.refreshAccessToken().then(token =>{
            if(config.headers)
            {
                config.headers['Authorization'] = `Bearer ${token}`
            }
            return defaultAxios(config)
        })
    }
    
    return response
} )
export default defaultAxios