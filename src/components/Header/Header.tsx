import React, { useRef, useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
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
                    <h2>Net Novels</h2>
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
                </div>
            </div>
        </header>
    )
}

export default Header