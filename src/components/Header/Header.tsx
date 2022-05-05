import React, { useState } from 'react'
import { IoLogOutOutline, IoMenuOutline, IoPersonSharp } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import authService from '../../apiServices/auth'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { logout } from '../../redux/userSlice'
import Button from '../Buttons/Button'
import Dropdown from '../Dropdown/Dropdown'
import './header.scss'
const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const location = useLocation()
    const navigate = useNavigate()
    const userState = useAppSelector(state => state.user.userInfo)
    const disPath = useAppDispatch()
    const handleClickBars = () => {
        setShowMenu(!showMenu)
    }
    const handleLogout = () => {
        authService.logout().then(res => {
            disPath(logout())
            navigate('/')
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <header className="header-top">
            <div className="container">
                <div className="logo">
                    <Link to={'/'}><h2>Net Novels</h2></Link>
                </div>
                <button className='menu-btn' onClick={handleClickBars}><IoMenuOutline /></button>
                <div className={`menu ${showMenu && 'active'}`}>
                    <div className="list-option">
                        <Dropdown title='thể loại' grid columns={3} >
                            <Dropdown.Item title='Tiên hiệp' />
                            <Dropdown.Item title='Tiên hiệp' />
                            <Dropdown.Item title='Tiên hiệp' />
                            <Dropdown.Item title='Tiên hiệp' />
                            <Dropdown.Item title='Tiên hiệp' />
                            <Dropdown.Item title='Tiên hiệp' />
                        </Dropdown>
                        <Dropdown title='Danh sách' grid>
                            <Dropdown.Item title='Bảng Xếp hạng' />
                            <Dropdown.Item title='Truyện miễn phí' />
                            <Dropdown.Item title='Truyện đã hoàn thành' />
                            <Dropdown.Item title='Truyện mới cập nhật' />
                        </Dropdown>
                    </div>
                    {
                        userState ?
                            (<div className="account">
                                <Dropdown title={`Hi, ${userState.name?.first} ${userState.name?.last}`} className='custom-drop' grid>
                                    <Dropdown.Item className='drop-items' path='/account' leftIcon={<IoPersonSharp />} title='Trang cá nhân' />
                                    <Dropdown.Item onClick={handleLogout} className='drop-items' leftIcon={<IoLogOutOutline />} title='Đăng xuất' />
                                </Dropdown>
                            </div>
                            ) : (
                                <div className="login-register">
                                    <Button link path='/register' title='Đăng ký' className='btn hover-primary text-white bg-primary' />
                                    <Button link state={{ from: location }} path='/login' title='Đăng nhập' className='btn hover-gray text-black bg-gray' />
                                </div>
                            )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header