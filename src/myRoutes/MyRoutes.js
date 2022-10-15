import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from '../components/shop/Shop'
import Home from '../pages/Home'
import AlbumDiscover from '../pages/albums/AlbumDiscover'
import Register from '../pages/Register'
import Login from '../pages/Login'
import LiveShowPage from '../pages/LiveShowPage'
import BeArtist from '../components/BeArtist/BeArtist'

const MyRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>} />
    <Route path='/albumdisc' element={<AlbumDiscover/>} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/liveshow" element={<LiveShowPage/>}/>
    <Route path="/artist" element={<BeArtist/>}/>


    {/* <Route path="/course-details/:id" element={<CourseDetail/>}/>
    <Route path="/courses/:id" element={<Courses/>}/>
    <Route path='/search/:term' element={<FilterCourse/>} />
    <Route path='/explore' element={<Explorepage/>} />
    <Route path='/task' element={<Task/>} /> */}

</Routes>
  )
}

export default MyRoutes