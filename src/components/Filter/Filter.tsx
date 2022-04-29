import React, { FocusEvent } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from 'react-icons/fa'
import './filter.scss'
const Filter = () => {
    const handleFocusBlurSearch = (e: FocusEvent) => {
        e.currentTarget.parentElement?.classList.toggle('focused')
    }
    return (
        <div className="filter" >
            <button className='btn filter-btn asc'>
                <FaSortNumericDownAlt />
                <FaSortNumericUpAlt />
            </button>
            <div className="search-box " >
                <IoSearch />
                <input type="text" onBlur={handleFocusBlurSearch} onFocus={handleFocusBlurSearch} placeholder='Tìm theo số chương, tên truyện...' />
            </div>
        </div>
    )
}

export default Filter