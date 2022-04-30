import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'
import Filter from '../Filter/Filter'
import './leftnav.scss'

export interface Props {
    show?: boolean,
    onClickOutside?: () => void
}
const LeftNav = ({ show, onClickOutside }: Props) => {
    const body = document.querySelector('body')
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



    return (
        <div className={`left-nav-wrapper ${show ? 'show' : ''}`}>
            <div className={`left-nav-bg `}>
                <div className="touch-area" onClick={onClickOutside && onClickOutside}></div>
            </div>
            <div className="left-nav" >
                <div className="left-nav__header">
                    <div className="title">Danh sách chương</div>
                </div>
                <Filter />
                <div className="left-nav__content">
                    <Link to={'/'} >
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