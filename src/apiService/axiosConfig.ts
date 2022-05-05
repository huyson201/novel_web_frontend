import axios from 'axios'


const defaultAxios = axios.create({
    baseURL: import.meta.env.VITE_API_HOST || 'http://locahost:3001',
    headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
    }
})

defaultAxios.prototype.setAccessToken = function(token:string)
{

}

export default defaultAxios