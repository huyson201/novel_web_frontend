import React from 'react'
import { Link } from 'react-router-dom'
import './bookcarditem.scss'
export interface Props {
    className?: string,
    imgUrl?: string,
    bookContent?: any
}
const BookCardItem = ({ className }: Props) => {
    return (
        <div className={`book-card-items ${className}`}>
            <Link to={'#'}>
                <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />

                <div className="cates">
                    <span className="tag tag-vip tag-yellow">VIP</span>
                </div>
                <div className="book-info">
                    <h2 className="book-info__title">
                        Vạn Cổ Đệ Nhất Tông (Bản Dịch-Full)
                    </h2>
                    <div className="book-info__cates">
                        <span className="tag  tag-white tag-color-black hover-none">Tiên hiệp</span>
                    </div>
                    <div className="book-info__desc">
                        Giảm 10% khi mua tối thiểu 500 chươngGiảm 15% khi mua tối thiểu 1200 chươngGiảm 20%...
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BookCardItem