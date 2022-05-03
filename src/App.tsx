import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ReadNovel from './pages/Chapter/Chapter'
import Default from './pages/Default/Default'
import Detail from './pages/Detail/Detail'
import ListBook from './pages/ListBook/ListBook'
import { withListBook, Props } from './HOC/withListBook'
import Category from './pages/Category/Category'
import Account from './pages/Account/Account'
import Bookcase from './pages/Bookcase/Bookcase'
import Profile from './pages/Profile/Profile'


function App() {
  const listBookRouters: Array<any> = [
    {
      Component: withListBook(ListBook),
      routePath: 'danh-sach/truyen-moi',
      title: 'Truyện mới cập nhật'
    },
    {
      Component: withListBook(ListBook),
      routePath: 'danh-sach/bang-xep-hang',
      title: 'Bảng Xếp Hạng'
    },
  ]

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Default />} >
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          {
            listBookRouters.map((data, index) => {
              return <Route path={data.routePath} key={index} element={<data.Component title={data.title} />} />
            })
          }
          <Route path=':slug' element={<Detail />} />
          <Route path=':slug/chapter/:chapterId' element={<ReadNovel />} />
          <Route path='the-loai/:slug' element={<Category />} />

          <Route path='account' element={<Account />}>
            <Route index element={<Bookcase />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
