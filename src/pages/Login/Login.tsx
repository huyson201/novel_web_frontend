import React, { useState, ChangeEvent, FormEvent } from 'react'
import { IoLogInOutline } from 'react-icons/io5'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import authService from '../../apiServices/auth'
import Button from '../../components/Buttons/Button'
import InputField from '../../components/InputField/InputField'
import { COOKIE_TOKEN_KEY } from '../../constants'
import cookies from '../../Cookies/cookies'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setAuthorized, setUserInfo } from '../../redux/userSlice'
import './login.scss'
const Login = () => {
    let [data, setData] = useState<any>({})
    const navigation = useNavigate()
    const location = useLocation()
    const userState = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    let from = (location.state as any)?.from?.pathname || "/";

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        let newData = { ...data }
        newData[e.currentTarget.name] = e.currentTarget.value
        setData(newData)
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            // request login
            let res = await authService.login(data.email, data.password)
            let dataResponse: any = res.data.data

            // set tokens to cookies, user state and navigate to from
            //from is a path
            cookies.set(COOKIE_TOKEN_KEY, { accessToken: dataResponse.accessToken, refreshToken: dataResponse.refreshToken })
            dispatch(setUserInfo({ _id: dataResponse._id, email: dataResponse.email, name: dataResponse.name }))
            dispatch(setAuthorized(true))
            navigation(from, { replace: true })
        } catch (error: any) {
            console.log(error.message)
        }
    }

    if (userState.authorized) {
        return <Navigate to={from} replace />
    }

    return (
        <div className='login-page'>
            <div className='login-wrapper'>
                <form action="#" className='form' onSubmit={handleSubmit}>
                    <div className="form__title">
                        <h2>Đăng nhập</h2>
                        <IoLogInOutline />
                    </div>
                    <div className="form__body">
                        <InputField onChange={handleOnchange} name='email' title='Email' placeholder='vidu@gmail.com' type='text' />
                        <InputField onChange={handleOnchange} name='password' title='Mật khẩu' type='password' placeholder='*******' />
                        <div className="forgot-password">
                            <Link to="#">Quên mật khẩu?</Link>
                        </div>
                        <div className="form__btn-box">
                            <Button type='submit' title='Đăng nhập' className='btn bg-primary text-white' />
                        </div>
                        <div className="register-link">
                            Bạn chưa có tài khoản?
                            <Link to="#"> Đăng ký.</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login