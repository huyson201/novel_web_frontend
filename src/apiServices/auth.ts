import axiosDefault from './axiosConfig'

export interface RegisterData {
    firstName:string,
    lastName:string,
    email:string,
    password:string
}

const authService = {
    login: (email:string, password:string)=>{
        return axiosDefault.post('/login',{email, password})
    },
    register: (data: RegisterData) =>{
        return axiosDefault.post('/register', data)
    },
    logout: () =>{
        return axiosDefault.post('/logout')
    },
    profile: ()=>{
        return axiosDefault.get('/profile')
    }
}

export default authService