import React, { useState, ChangeEvent, FormEvent } from 'react'
import { IoLogInOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../apiService/auth'
import Button from '../../components/Buttons/Button'
import InputField from '../../components/InputField/InputField'
import { COOKIE_TOKE_KEY } from '../../constants'
import cookies from '../../Cookies/cookies'
import './login.scss'
const Login = () => {
    let[data, setData] = useState<any>({})
    const navigation = useNavigate()

    const handleOnchange = (e:ChangeEvent<HTMLInputElement>) =>{
        let newData = {...data}
        newData[e.currentTarget.name] = e.currentTarget.value
        setData(newData)
    }
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        try {
            let res = await authService.login(data.email, data.password)
            let dataResponse:any = res.data.data
            cookies.set(COOKIE_TOKE_KEY, {accessToken: dataResponse.accessToken, refreshToken: dataResponse.refreshToken})
            navigation('/',{replace: true})
        } catch (error: any) {
            console.log(error.message)
        }
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