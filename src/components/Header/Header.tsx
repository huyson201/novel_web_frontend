import React, { useRef, useState } from 'react'
import { IoLogOutOutline, IoMenuOutline, IoPersonSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'
import Dropdown from '../Dropdown/Dropdown'
import './header.scss'
const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const handleClickBars = () => {
        setShowMenu(!showMenu)
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
                    <div className="login-register">
                        <Button link path='/register' title='Đăng ký' className='btn hover-primary text-white bg-primary' />
                        <Button link path='/login' title='Đăng nhập' className='btn hover-gray text-black bg-gray' />
                    </div>
                    {/* <div className="account">
                        <Dropdown title='Hi, huy son' className='custom-drop' grid>
                            <Dropdown.Item className='drop-items' leftIcon={<IoPersonSharp />} title='Trang cá nhân' />
                            <Dropdown.Item className='drop-items' leftIcon={<IoLogOutOutline />} title='Đăng xuất' />
                        </Dropdown>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header