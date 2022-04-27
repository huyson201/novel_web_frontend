import React from 'react'
import { IoLogInOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from '../../components/Buttons/Button'
import InputField from '../../components/InputField/InputField'
import './login.scss'
const Login = () => {
    return (
        <div className='login-page'>
            <div className='login-wrapper'>
                <form action="#" className='form'>
                    <div className="form__title">
                        <h2>Đăng nhập</h2>
                        <IoLogInOutline />
                    </div>
                    <div className="form__body">
                        <InputField title='Email' placeholder='vidu@gmail.com' type='text' />
                        <InputField title='Mật khẩu' type='password' placeholder='*******' />
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