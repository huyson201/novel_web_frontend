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

interface RouterElement {
  Component: FC<Props>,
  routePath: string,
  title?: string
}
function App() {
  const listBookRouters: Array<RouterElement> = [
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
          <Route path='/:slug' element={<Detail />} />
          <Route path='/:slug/chapter/:chapterId' element={<ReadNovel />} />
          <Route path='/the-loai/:slug' element={<Category />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
