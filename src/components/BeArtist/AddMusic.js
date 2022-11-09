import { Button } from '@mui/material';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../api/BaseConfig';
import { listAlbum } from '../../Redux/Actions/AlbumAction';
import { musicAdd } from '../../Redux/Actions/MusicAction';
import { MusicFileAddAction, PhotoAction } from '../../Redux/Actions/FileUploadAction';
import { MUSIC_CLEAR } from '../../Redux/Constants/MusicConstans';
import Loading from '../LoadingError/Loading';
import Toast from '../LoadingError/Toast';
import BeArtist from './BeArtist';
const AddMusic = () => {
    const dispatch = useDispatch();
    const [Name, setName] = useState("")
    const [musicUrl, setMusicUrl] = useState("")
    const [musicVideo, setMusicVideo] = useState("")
    const [author, setAuthor] = useState("")
    const [isFeatured, setIsFeatured] = useState(false)
    const [photo, setPhoto] = useState("")
    const [albumId, setAlbumId] = useState(null)
    const [userIdfirst, setUserId] = useState("")
    const [albums, setAlbums] = useState([])
    // console.log(parseInt(albumId));
    // const { albums } = useSelector(state => state.albumList);
    const { userInfo } = useSelector(st => st.loginUser);
    const photoInfo = useSelector(st => st.photoAdd);
    const musicfileInfo = useSelector(st => st.musicfileAdd);


    // console.log(albums.map(c=>c.id));
    // console.log(parseInt(albumId));

    const { musicInfo, loading } = useSelector(state => state.addedMusicRed)
    if (userInfo) {
        var decode = jwtDecode(userInfo.token.result.token);
    }
    console.log(decode);
    //   console.log(decode.Id);
    const navi = useNavigate();
    useEffect(() => {
        if (musicInfo && musicInfo.status === 200) {
            navi(`/usermusics/${decode.Id}`);
            dispatch({ type: MUSIC_CLEAR })
        }
    }, [musicInfo, navi, dispatch])
    useEffect(() => {
        dispatch(listAlbum())
        // dispatch(listInstructors())
    }, [dispatch])


    const fileUploadHandler = async (event) => {
        dispatch(PhotoAction(event))
    }
    const MusicfileUploadHandler = async (event) => {
        dispatch(MusicFileAddAction(event))
    }
    const GetMusicianAlbum = () => {
        if (userInfo) {

            const data = fetch(`${BASE_URL}api/Musician/GetMusicianAlbum/${decode.Id}`).then(c => c.json()).then(s => setAlbums(s))
            console.log(data);
        }
    }
    useEffect(() => {
        GetMusicianAlbum()
    }, [])

    const submitHandler = (e) => {
        if (userInfo) {

            e.preventDefault();
            // const musicians=musicians.userId
            const newMusic = {
                Name,
                musicUrl: musicfileInfo.musicfileInfo.data,
                musicVideo,
                authorName: author,
                isFeatured,
                photo: photoInfo.photoInfo.data,
                musicians: [
                    {
                        userId: decode.Id
                    }
                ],
                albumsId: parseInt(albumId),
            }
            dispatch(musicAdd(newMusic))
        }
    }

    return (
        <>
            <Toast />
            <section id="pager-section">
                <div className="album-bg"></div>
                <div className="container">
                    <div className="pager-content text-center">
                        <h2 >Add Music</h2>
                    </div>
                </div>
            </section>
            {
                userInfo && decode.role[0] === "Artist" ? (
                    <>

                        <section className="content-main" style={{ maxWidth: "1200px" }}>
                            <form onSubmit={submitHandler}>
                                <div className="content-header">
                                    <Link to="/" className="btn btn-danger text-white">
                                        Go to Musics
                                    </Link>
                                    <Link to="/addlive" className="btn btn-danger text-white">
                                        Add Live SHow
                                    </Link>
                                    <Link to="/addalbum" className="btn btn-danger text-white">
                                        Add Album
                                    </Link>
                                    <h2 className="content-title">Add music</h2>
                                    <div>
                                        <button type="submit" className="btn btn-primary">
                                            Publish now
                                        </button>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-xl-8 col-lg-8">
                                        <div className="card mb-4 shadow-sm">
                                            <div className="card-body">
                                                {/* {error && <Message variant="alert-danger">{error}</Message>} */}
                                                {loading && <Loading />}
                                                <div className="mb-4">
                                                    <label htmlFor="product_title" className="form-label">
                                                        Music Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Type here"
                                                        className="form-control"
                                                        id="product_title"
                                                        required
                                                        value={Name}
                                                        onChange={e => setName(e.target.value)}
                                                    />
                                                </div>

                                                {/* <div className="mb-4">
                                        <label htmlFor="product_title" className="form-label">
                                            Musician :{userInfo.email}
                                        </label>
                                        <input
                                            type="checkBox"
                                            // placeholder=
                                            // className="form-control"
                                            id="product_title"
                                            // required
                                            value={userIdfirst}
                                            onChange={() => setUserId(decode.Id)}
                                        />
                                    </div> */}

                                                <div className="mb-4">
                                                    <label htmlFor="product_categories" className="form-label">
                                                        Albums
                                                    </label>
                                                    <select id="product_categories"
                                                        onChange={e => setAlbumId(e.target.value)}
                                                        className="form-control" defaultValue="-">
                                                        <option option disabled value="-">select albums...</option>
                                                        {albums.albums?.map(album => (
                                                            // console.log(album.id),
                                                            <option key={album.id} value={album.id}>{album.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="mb-4">
                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        component="label"
                                                    >
                                                        Upload Music File
                                                        <input
                                                            type="file"
                                                            hidden
                                                            onChange={MusicfileUploadHandler}
                                                        />
                                                    </Button>

                                                    <div className="row">
                                                        <div className="col-lg-3 my-3">
                                                            {
                                                                musicfileInfo.loading === true ? (
                                                                    <Loading />

                                                                ) : <audio controls>
                                                                    <source src={musicfileInfo.musicfileInfo.data} />
                                                                </audio>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="product_summary" className="form-label">
                                                        musicVideo
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        rows={5}
                                                        placeholder="Type here"
                                                        className="form-control"
                                                        id="product_summary"
                                                        value={musicVideo}
                                                        onChange={e => setMusicVideo(e.target.value)}
                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="product_discount" className="form-label">
                                                        Author
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Type here"
                                                        className="form-control"
                                                        id="product_discount"
                                                        value={author}
                                                        onChange={(e) => setAuthor(e.target.value)}
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="product_featured" className="form-label">
                                                        Is Featured?
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="product_price"
                                                        value={isFeatured}
                                                        onChange={(e) => { setIsFeatured(e.target.checked ? true : false) }}
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        component="label"
                                                    >
                                                        Upload Photo
                                                        <input
                                                            type="file"
                                                            hidden
                                                            onChange={fileUploadHandler}
                                                        />
                                                    </Button>

                                                    <div className="row">
                                                        <div className="col-lg-3 my-3">
                                                            <div className="card">
                                                                {
                                                                    // !photoInfo.photoInfo.data&&
                                                                    photoInfo.photoInfo ? (
                                                                        <img className='img-fluid' src={`${photoInfo.photoInfo.data}`} alt='' />
                                                                    ) : <Loading />
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </>
                ) : <div className='p-5'>

                    <span>You are not Artist please </span>
                    <Link to='/artist'>Be Artist</Link>
                </div>
                

                // <div className='p-5'>
                //     <span style={{ fontSize: "20px" }}>You dont have a Account please</span>
                //     <Link to="/login" style={{ fontSize: "20px" }}>  Login</Link>

                // </div>
            }
          
            

        </>
    )
}

export default AddMusic