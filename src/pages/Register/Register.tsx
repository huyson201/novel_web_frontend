import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { IoCreateOutline, IoCheckmarkOutline } from 'react-icons/io5'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Buttons/Button'
import './register.scss'

const Register = () => {

    const [disabled, setDisabled] = useState<boolean>(true)
    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(!e.currentTarget.checked)
    }
    return (
        <div className='register-page'>
            <div className='register-wrapper'>
                <form action="#" className='form'>
                    <div className="form__title">
                        <h2>Đăng ký</h2>
                        <IoCreateOutline />
                    </div>
                    <div className="form__body">
                        <InputField title='Họ Tên' placeholder='Nguyễn Văn A' type='text' />
                        <InputField title='Email' placeholder='vidu@gmail.com' type='text' />
                        <InputField title='Mật khẩu' type='password' placeholder='*******' />
                        <div className='check-box'>
                            <label htmlFor="agree-rules">
                                <input onChange={handleCheck} type="checkbox" name="agree-rules" id="agree-rules" />
                                <div className='custom-check-box'><IoCheckmarkOutline /></div>
                                <div className='check-box__title'>
                                    Đồng ý với các <a href="#">điều khoản</a> và <a href="#">chính sách</a>
                                </div>
                            </label>
                        </div>
                        <div className="form__btn-box">
                            <Button disabled={disabled} title='Đăng ký' type='submit' className='btn bg-primary text-white' />
                        </div>

                        <div className="login-link">
                            Bạn Đã có tài khoản?
                            <a href="#"> Đăng Nhập.</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register