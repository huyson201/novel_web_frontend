import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__logo">
                    Net Novel
                </div>
                <p className="footer__content">Webtruyen đọc truyện dịch nhanh nhất, ổn định nhất, đọc truyện KHÔNG quảng cáo.</p>
                <div className="footer__app-links">
                    <Link to="#"><img src="https://tienvuc.xyz/_nuxt/img/app-store-badge.fba0f3f.png" alt="app_store" /></Link>
                    <Link to="#"><img src="https://tienvuc.xyz/_nuxt/img/google-play-badge.0dbdf26.png" alt="google_store" /></Link>
                </div>
                <div className="footer__web-rule">
                    <Link to="#">Liên hệ hỗ trợ</Link>
                    <Link to="#">Quy Định & Chính Sách</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer