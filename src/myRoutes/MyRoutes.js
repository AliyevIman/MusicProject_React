import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from '../components/shop/Shop'
import Home from '../pages/Home'
import AlbumDiscover from '../pages/albums/AlbumDiscover'
import Register from '../pages/Register'
import Login from '../pages/Login'
import LiveShowPage from '../pages/LiveShowPage'
import BeArtist from '../components/BeArtist/BeArtist'
import AddLiveShow from '../components/liveShows/AddLiveShow'
import UserMusics from '../pages/UserAccountAPges/UserMusics'
import AddAlbum from '../components/Album/AddAlbum'
import MusicianAlbums from '../pages/UserAccountAPges/MusicianAlbums'
import AlbumDetail from '../components/Album/AlbumDetail'

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
    <Route path="/addlive" element={<AddLiveShow/>}/>
    <Route path="/addalbum" element={<AddAlbum/>}/>

    <Route path="/usermusics/:id" element={<UserMusics/>}/>
    <Route path="/useralbum/:id" element={<MusicianAlbums/>}/>
    <Route path="/albumdetail/:userId/:id" element={<AlbumDetail/>}/>

    {/* <Route path="/course-details/:id" element={<CourseDetail/>}/>
    <Route path="/courses/:id" element={<Courses/>}/>
    <Route path='/search/:term' element={<FilterCourse/>} />
    <Route path='/explore' element={<Explorepage/>} />
    <Route path='/task' element={<Task/>} /> */}

</Routes>
  )
}

export default MyRoutes