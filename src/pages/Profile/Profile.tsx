import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import './profile.scss'
const Profile = () => {
    return (
        <div className='profile-page'>
            <div className="container">
                <h2 className="profile-title">Thông tin tài khoản</h2>
                <div className="profile-info">
                    <div className="profile-field">
                        <div className="profile-row">
                            <div className="profile-row__title">Name</div>
                            <div >Huy Son</div>
                            <button className='btn edit-btn'><FaPencilAlt />Sữa</button>
                        </div>
                        <div className="edit-box">
                            <div className="edit-box__field">
                                <input type="text" placeholder='Nhập tên mới...' />
                                <button className='btn btn-save'>Lưu</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile-field">
                        <div className="profile-row">
                            <div className="profile-row__title">Email</div>
                            <div className="disabled">huyson201@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile