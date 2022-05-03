import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import swiperOnChangePagination from '../../Helper/swiperOnChangePagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './listbookslider.scss'
import BookCardItem from '../BookCardItem/BookCardItem';

export interface Props {
    title?: string
}

const ListBookSlider = ({ title }: Props) => {

    return (
        <div className='slider-wrapper'>
            <Link to={'#'}>
                <h2 className="title">{title || 'List Book Slider'}</h2>
            </Link>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: false, horizontalClass: 'swiper-pagination-box' }}
                slidesPerView={'auto'}
                spaceBetween={26}
                className='swiper-container'
                onPaginationUpdate={swiperOnChangePagination}
                breakpoints={{
                    1200: {
                        spaceBetween: 26
                    },
                    768: {
                        spaceBetween: 20
                    },
                    320: {
                        spaceBetween: 10
                    }
                }}

            >
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <BookCardItem className='slide-content' />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <BookCardItem className='slide-content' />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide  >
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide swiper-book-card'>
                    <div className='slide-content book-card-items'>
                        <Link to={'#'}>
                            <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ListBookSlider