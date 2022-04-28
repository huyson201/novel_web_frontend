import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReadNovel from './pages/ReadNovel/ReadNovel'
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/reading' element={<ReadNovel />} />
      </Routes>
    </div>
  )
}

export default App
