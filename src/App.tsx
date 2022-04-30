import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReadNovel from './pages/Chapter/Chapter'
import Default from './pages/Default/Default'
import Detail from './pages/Detail/Detail'

function App() {
  console.log(import.meta.env.MODE)
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Default />} >
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
          <Route path='/:slug/chapter/:chapterId' element={<ReadNovel />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
