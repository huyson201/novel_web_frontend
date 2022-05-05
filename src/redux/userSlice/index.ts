import { COOKIE_TOKEN_KEY } from './../../constants/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import cookies from '../../Cookies/cookies'

let token = cookies.get(COOKIE_TOKEN_KEY)

interface UserInfo
{
    _id:string,
    email:string,
    name:{
        first:string,
        last:string
    },
    coins: number
}

export interface userState {
    authorized: boolean,
    logout?:boolean,
    userInfo?:UserInfo
}

const initialState: userState = {
    authorized: token? true: false,
    logout: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
        setAuthorized: (state, action: PayloadAction<boolean>)=>{
            state.authorized = action.payload
            state.logout = false
        },
        setUserInfo:(state, action: PayloadAction<UserInfo>)=>{
            state.userInfo = action.payload
        },
        logout: (state)=>{
            state.authorized = false
            state.userInfo = undefined
            state.logout = true
            cookies.remove(COOKIE_TOKEN_KEY)
        }
  },
})

export const {setAuthorized, setUserInfo, logout} = userSlice.actions

export default userSlice.reducer