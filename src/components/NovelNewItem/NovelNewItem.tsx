import React from 'react'
import { Link } from 'react-router-dom'
import './novelnewitem.scss'

export interface Props {
    title: string,
    author?: string,
    cates: Array<string>,
    chapterNumber: number,
    chapterTitle: string,
    times?: string
}
const NovelNewItem = () => {
    return (
        <div className='list-items'>
            <div className="img-box">
                <Link to="#">
                    <img src="https://cdn.tienvuc.xyz/media/books/123238563-346810739756997-8323091210514842455-n-a961.jpeg" alt="avatar" />
                </Link>
            </div>
            <div className="list-items__contents">
                <div className="list-items__contents-title">
                    <Link to="#">
                        <h3 className='title'>Toàn cầu luân hồi chỉ có ta biết cốt truyện (Bản dịch) <span className="tag tag-yellow tag-vip">VIP</span></h3>
                    </Link>
                    <p className="author">Vấn Đỉnh Thiên Bảng</p>
                </div>

                <div className="cates">
                    <Link to="#"><span className='tag tag-blue'>Võng du</span></Link>
                    <Link to="#"><span className='tag tag-blue'>Tiên hiệp</span></Link>
                    <Link to="#"><span className='tag tag-blue'>Đô thị</span></Link>
                    <Link to="#"><span className='tag tag-blue'>Đô thị</span></Link>
                </div>
                <div className="chapter">
                    <Link to="#" className='chapter__links'>
                        <span className='chapter__number'>Chương 852.</span>
                        <span className='chapter__title'>Không ngờ trái đất lại ẩn dấu chân long!</span>
                    </Link>
                    <p className="times">1 giờ trước</p>
                </div>
            </div>
        </div>
    )
}

export default NovelNewItem