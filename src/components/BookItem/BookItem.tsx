import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './bookitem.scss'

const BookItem = () => {
    return (

        <div className="book-items">
            <div className="book-items__container">
                <div className="book-items__img">
                    <Link to={'#'}> <img src="https://cdn.tienvuc.xyz/media/books/1490a227-5615-41c8-a37c-ac8835d9bba3-a51a85.jpeg" alt="book image" /></Link>
                </div>
                <div className="book-items__title">
                    <Link to={'#'}>
                        <h3 >
                            Bắt Đầu Quá Mạnh Làm Sao Bây Giờ (Dịch)
                        </h3>
                    </Link>
                </div>
                <div className="book-items__chapter">
                    <Link to={'#'}>
                        Đọc tiếp chương 23
                    </Link>
                </div>
                <button className='btn remove-btn'><IoCloseOutline /></button>
            </div>
        </div>

    )
}

export default BookItem