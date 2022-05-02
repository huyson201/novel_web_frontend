import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import NovelFullItem from '../../components/NovelFullItem/NovelFullItem';
import ListBookContent from '../../components/ListBookContent/ListBookContent';
import ListBookSlider from '../../components/ListBookSlider/ListBookSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import swiperOnChangePagination from '../../Helper/swiperOnChangePagination';
import './home.scss'

const Home = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='home-page'>
            {/* main content */}
            <div className="main-content">
                <div className="container">
                    <section className="slider-feature">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            pagination={{ clickable: false }}
                            onPaginationUpdate={swiperOnChangePagination}
                            autoplay={
                                {
                                    delay: 3000
                                }
                            }
                        >
                            <SwiperSlide className='swiper-slide-container'>
                                <div>
                                    <Link to={'#'}>
                                        <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide-container'>
                                <div>
                                    <Link to={'#'}>
                                        <img src="https://cdn.tienvuc.xyz/media/banners/627f22b02911e14fb800-c63c6e.jpg" alt="slider-img" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide-container'>
                                <div>
                                    <Link to={'#'}>
                                        <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide-container'>
                                <div>
                                    <Link to={'#'}>
                                        <img src="https://cdn.tienvuc.xyz/media/banners/1-19d07a.jpg" alt="slider-img" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide-container'>
                                <div>
                                    <Link to={'#'}>
                                        <img src="https://cdn.tienvuc.xyz/media/banners/273235603-481138613497638-3243237241621493393-n-eb6475.jpg" alt="slider-img" />
                                    </Link>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide className='swiper-slide-container'>
                                <div>
                                    <Link to={'#'}>
                                        <img src="https://cdn.tienvuc.xyz/media/banners/pc-5adb94.png" alt="slider-img" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </section>

                    {/* search bar */}
                    <SearchBar placeholder='Tìm kiếm truyện...' />
                    <ListBookSlider title='Truyện Đề cử' />
                    <ListBookSlider title='Bảng Xếp Hạng ' />

                    {/* list novels */}
                    <section className='list-novels'>
                        <div className="list-novels__news">
                            <div className="list-novels__news-title titles">
                                <Link to="#">
                                    <h2>
                                        Truyện mới cập nhật
                                    </h2>
                                </Link>
                            </div>
                            <div className="list-novels__news-content list-contents">
                                <ListBookContent />
                            </div>
                        </div>
                        <div className="list-novels__full">
                            <div className="list-novels__full-title titles">
                                <Link to="#">
                                    <h2>
                                        Truyện Đã full
                                    </h2>
                                </Link>
                            </div>
                            <div className="list-novels__full-content list-contents">
                                <NovelFullItem />
                                <div className='separator'></div>
                                <NovelFullItem />
                                <div className='separator'></div>
                                <NovelFullItem />
                                <div className='separator'></div>
                                <NovelFullItem />
                                <div className='separator'></div>
                                <NovelFullItem />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default Home