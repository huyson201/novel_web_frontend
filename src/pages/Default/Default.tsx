import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
const Default = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Default