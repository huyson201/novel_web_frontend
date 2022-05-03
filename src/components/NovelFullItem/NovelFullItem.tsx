import React from 'react'
import { Link } from 'react-router-dom'
import './novelfullitem.scss'
export interface Props {
    title: string,
    cates: Array<string>
}
const NovelFullItem = () => {
    return (
        <Link to="#" className='novel-full-item__links'>
            <div className='novel-full-items'>
                <h3 className='novel-full-items__title'>Ta Trở Thành Phú Nhị Đại Phản Phái</h3>
                <div className="novel-full-items__cates">
                    <span className='tag tag-yellow tag-vip hover-none'>vip</span>
                    <span className='tag tag-green hover-none'>Full</span>
                    <span className='tag tag-blue hover-none'>Võng du</span>
                    <span className='tag tag-blue hover-none'>Tiên hiệp</span>
                    <span className='tag tag-blue hover-none'>Đô thị</span>
                    <span className='tag tag-blue hover-none'>Đô thị</span>
                </div>
            </div>
        </Link>
    )
}
export default NovelFullItem

