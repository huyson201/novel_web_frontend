import React from 'react'
import BookItem from '../../components/BookItem/BookItem'
import './bookcase.scss'
const Bookcase = () => {
    return (
        <div className='book-case'>
            <h2 className="book-case__title">Tủ sách của bạn</h2>
            <div className="book-case__list">
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
            </div>
        </div>
    )
}

export default Bookcase