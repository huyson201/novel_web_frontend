import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { matchRoutes, useLocation } from 'react-router-dom'
const Default = () => {
    const location = useLocation()
    const routes = matchRoutes([{ path: '/:slug/chapter/:chapterId' }], location)

    return (
        <>
            <Header />
            <Outlet />
            {/* footer */}
            {(!routes || routes.length <= 0) && <Footer />}
        </>
    )
}

export default Default