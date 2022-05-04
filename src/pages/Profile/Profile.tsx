import React,{MouseEvent, useState} from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { IoKeyOutline } from 'react-icons/io5'

import './profile.scss'
const Profile = () => {

    const [showUpdateName, setShowUpdateName] = useState<boolean>(false)
    const [showUpdatePassword, setShowUpdatePassword] = useState<boolean>(false)
    const handleShowUpdateName = (e:MouseEvent) =>{
       setShowUpdateName(!showUpdateName)
    }
    const handleShowUpdatePassword = (e:MouseEvent) =>{
        setShowUpdatePassword(!showUpdatePassword)
     }
 
    return (
        <div className='profile-page'>
            <div className="container">
                <h2 className="profile-title">Thông tin tài khoản</h2>
                <div className="profile-info">
                    <div className="profile-field">
                        <div className="profile-row">
                            <div className="profile-row__title">Name</div>
                            <div >Huy Son</div>
                           {
                               !showUpdateName?(
                                <button className='btn edit-btn' onClick={handleShowUpdateName}><FaPencilAlt />Sữa</button>
                               ):
                               (
                                <button className='btn edit-btn' onClick={handleShowUpdateName}>Close</button>
                               ) 
                           }
                        </div>
                        {
                            showUpdateName && (
                                <div className="edit-box">
                                    <div className="edit-box__fields">
                                        <input type="text" placeholder='Nhập tên mới...' />
                                        <button className='btn btn-save'>Lưu</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="profile-field">
                        <div className="profile-row">
                            <div className="profile-row__title">Email</div>
                            <div className="disabled">huyson201@gmail.com</div>
                        </div>
                    </div>
                    <div className="profile-field">
                        <div className="profile-row">
                            <div className="profile-row__title">Mật khẩu</div>
                            <div className="profile-row__value"><IoKeyOutline /> Nhấn sữa để thây đổi Mật khẩu</div>
                            {
                               !showUpdatePassword?(
                                <button className='btn edit-btn' onClick={handleShowUpdatePassword}><FaPencilAlt />Sữa</button>
                               ):
                               (
                                <button className='btn edit-btn' onClick={handleShowUpdatePassword}>Close</button>
                               ) 
                           }
                        </div>
                        {
                            showUpdatePassword && (
                                <div className="edit-box">
                                   <div>
                                        <div className="edit-box__fields">
                                            <input type="text" placeholder='Nhập mật khẩu cũ...' />            
                                        </div>
                                            <div className="edit-box__fields">
                                                <input type="text" placeholder='Nhập mật khẩu mới...' /> 
                                        </div>
                                        <div className="edit-box__fields">
                                            <input type="text" placeholder='Nhập lại mật khẩu...' />
                                        </div>
                                   </div>
                                   <button className='btn  btn-save-multi-field'>Lưu</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile