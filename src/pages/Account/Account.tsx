import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import formatCurrency from '../../Helper/currencyFormat'
import currencyIcon from '../../icons/dollar-circle.svg'
import { MdOutlineBookmarkAdded } from 'react-icons/md'
import './account.scss'
import { IoPersonOutline } from 'react-icons/io5'

type SidebarItem = {
    icon: JSX.Element,
    title: string,
    path?: string
}

const sideBarItems: Array<SidebarItem> = [
    {
        icon: <MdOutlineBookmarkAdded />,
        title: "Tủ sách",
        path: '.'
    },
    {
        icon: <IoPersonOutline />,
        title: "Thông tin tài khoản",
        path: './profile'
    }
]

const Account = () => {
    return (
        <div className='account-page'>
            <div className="container">
                <section>
                    <div className="side-bar">
                        <div className="side-bar__head">
                            <div className="user-name">Huy Son</div>
                            <div className="user-email">huyson@gmail.com</div>
                            <div className="user-coins">
                                <img src={currencyIcon} alt="dollar icon" />
                                <span className="coins">
                                    {formatCurrency(1200)} Xu
                                </span>
                            </div>
                        </div>
                        <ul className="side-bar__menu">
                            {
                                sideBarItems.map((e, index) => {
                                    return (
                                        <li key={index}><NavLink end className={`side-bar__links`} to={e.path || '#'}>{e.icon}{e.title}</NavLink></li>
                                    )
                                })
                            }

                        </ul>

                    </div>
                    <div className="account-content">
                        <Outlet />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Account