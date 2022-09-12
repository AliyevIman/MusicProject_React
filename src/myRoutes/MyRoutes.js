import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Album from '../pages/albums/Album'
import Shop from '../components/shop/Shop'
import Home from '../pages/Home'
import AlbumDiscover from '../pages/albums/AlbumDiscover'

const MyRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>} />
    <Route path='/album/:id' element={<Album/>} />
    <Route path='/albumdisc' element={<AlbumDiscover/>} />
    {/* <Route path="/course-details/:id" element={<CourseDetail/>}/>
    <Route path="/courses/:id" element={<Courses/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path='/search/:term' element={<FilterCourse/>} />
    <Route path='/explore' element={<Explorepage/>} />
    <Route path='/task' element={<Task/>} /> */}

</Routes>
  )
}

export default MyRoutes