import React from 'react'
import Header from '../../components/Header/Header'
import Slider from "react-slick";
import { Settings } from 'react-slick';
import './home.scss'
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import NovelNewItem from '../../components/NovelNewItem/NovelNewItem';
import NovelFullItem from '../../components/NovelFullItem/NovelFullItem';
import Footer from '../../components/Footer/Footer';
const Home = () => {
    const sliderMainSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true
    }
    const listNovelSliderSettings: Settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "linear",
        slidesToShow: 1,
        variableWidth: true,


    }
    return (
        <div className='home-page'>
            {/* main content */}
            <div className="main-content">
                <div className="container">
                    <section className="slider-feature">
                        <Slider className='main-slider' lazyLoad='ondemand'  {...sliderMainSettings}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/627f22b02911e14fb800-c63c6e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/1-19d07a.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/273235603-481138613497638-3243237241621493393-n-eb6475.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/pc-5adb94.png" alt="slider-img" />
                                </Link>
                            </div>
                        </Slider>
                    </section>

                    {/* search bar */}
                    <SearchBar placeholder='Tìm kiếm truyện...' />

                    {/* sliders list novel hot */}
                    <section className='novels-hot list-novels-slider'>
                        <h2 className='slider-title'>Truyện đang hot</h2>
                        <Slider className='main-slider'  {...listNovelSliderSettings}>
                            <div className='slide-content'>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div className='slide-content'>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/627f22b02911e14fb800-c63c6e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div className='slide-content'>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/1-19d07a.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div className='slide-content'>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/273235603-481138613497638-3243237241621493393-n-eb6475.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div className='slide-content'>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/pc-5adb94.png" alt="slider-img" />
                                </Link>
                            </div>
                        </Slider>
                    </section>

                    {/* sliders list novel rank */}
                    <section className='novels-hot list-novels-slider'>
                        <h2 className='slider-title'>Bảng Xếp Hạng</h2>
                        <Slider className='main-slider'  {...listNovelSliderSettings}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/627f22b02911e14fb800-c63c6e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/1-19d07a.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/273235603-481138613497638-3243237241621493393-n-eb6475.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/pc-5adb94.png" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/627f22b02911e14fb800-c63c6e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/1-19d07a.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/273235603-481138613497638-3243237241621493393-n-eb6475.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/pc-5adb94.png" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/627f22b02911e14fb800-c63c6e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/1-19d07a.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/273235603-481138613497638-3243237241621493393-n-eb6475.jpg" alt="slider-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/pc-5adb94.png" alt="slider-img" />
                                </Link>
                            </div>
                        </Slider>
                    </section>
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
                                <NovelNewItem />
                                <div className='separator'></div>
                                <NovelNewItem />
                                <div className='separator'></div>
                                <NovelNewItem />
                                <div className='separator'></div>
                                <NovelNewItem />
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
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Home