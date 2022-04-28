import React, { useEffect, UIEvent, FocusEvent, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from 'react-icons/fa'
import './leftnav.scss'
import { IoSearch } from 'react-icons/io5'

export interface Props {
    show?: boolean,
    onClickOutside?: () => void
}
const LeftNav = ({ show, onClickOutside }: Props) => {
    const body = document.querySelector('body')
    const filterRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (body) {
            if (show) {
                body.style.overflow = `hidden`
                return
            }
            body.style.overflow = `unset`
            return
        }

    }, [show])

    const handleScrollNav = (e: UIEvent<HTMLDivElement>) => {
        let filterRect: DOMRect | undefined = filterRef.current?.getBoundingClientRect()
        if (filterRect && filterRect?.y <= 0) {
            filterRef.current?.classList.add('sticky')
        }
        else {
            filterRef.current?.classList.remove('sticky')
        }
    }
    const handleFocusBlurSearch = (e: FocusEvent) => {
        e.currentTarget.parentElement?.classList.toggle('focused')
    }
    return (
        <div className={`left-nav-wrapper ${show ? 'show' : ''}`}>
            <div className={`left-nav-bg `}>
                <div className="touch-area" onClick={onClickOutside && onClickOutside}></div>
            </div>
            <div className="left-nav" onScroll={handleScrollNav}>
                <div className="left-nav__header">
                    <div className="title">Danh sách chương</div>
                </div>
                <div className="filter" ref={filterRef}>
                    <button className='btn filter-btn asc'>
                        <FaSortNumericDownAlt />
                        <FaSortNumericUpAlt />
                    </button>
                    <div className="search-box " >
                        <IoSearch />
                        <input type="text" onBlur={handleFocusBlurSearch} onFocus={handleFocusBlurSearch} placeholder='Tìm theo số chương, tên truyện...' />
                    </div>
                </div>
                <div className="left-nav__content">
                    <Link to={'#'}>
                        <div className="chapter-items active">
                            <div className="chapter-title">
                                <span className="chapter-number ">1.</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>

                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link><Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                    <Link to={'#'}>
                        <div className="chapter-items">
                            <div className="chapter-title">
                                <span className="chapter-number">1</span>
                                <span className="title-text">Người ở rễ ôn gia</span>
                            </div>
                            <div className="times">Cập nhật: 4 tuần trước</div>
                        </div>
                    </Link>
                </div>

                <div className="controls-btn">
                    <Button link className='btn btn-controls bg-light' disabled title='Trang trước' />
                    <Button link className='btn btn-controls bg-light' title='Trang Sau' />
                </div>
            </div>
        </div>


    )
}

export default LeftNav