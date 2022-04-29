import React from 'react'
import { Link } from 'react-router-dom'
import './chapteritem.scss'
const ChapterItem = () => {
    return (

        <div className='chapter-items'>
            <Link to={'#'}>

                <div className="chapter-items__title">
                    <span className="chapter-items__title-number">
                        Chương 1.
                    </span>
                    <span className="chapter-items__title-text">
                        Sống lại
                    </span>
                </div>
                <div className="times">
                    Cập nhật: 8 tháng trước
                </div>
            </Link>
        </div>

    )
}

export default ChapterItem