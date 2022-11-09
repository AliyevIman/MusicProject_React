import Toast from '../LoadingError/Toast';
import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { musicAdd } from '../../Redux/Actions/MusicAction';
import { ALBUM_CLEAR } from '../../Redux/Constants/AlbumConstants';
import Loading from '../LoadingError/Loading';
import { albumAdd } from '../../Redux/Actions/AlbumAction';
import { Button } from '@mui/material';
import { BASE_URL, FILE_PATH } from '../../api/BaseConfig';
import axios from 'axios';
import { PhotoAction } from '../../Redux/Actions/FileUploadAction';

const AddAlbum = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [albumPhoto, setAlbumPhoto] = useState("");
    const [recordLable, setRecordLable] = useState("");
    const [songCount, setSongCount] = useState("");
    const [isFeatured, setIsFeatured] = useState(false);
    const [isNew, setIsNew] = useState(false);
    console.log(albumPhoto);
    const navi = useNavigate();

    const { userInfo } = useSelector(st => st.loginUser);
    const { albumInfo, loading } = useSelector(state => state.addedAlbumRed)
    const photoInfo = useSelector(st => st.photoAdd);

    if (userInfo) {
        var decode = jwtDecode(userInfo.token.result.token);
    }

    const fileUploadHandler = async (event) => {
        dispatch(PhotoAction(event))

    }

    useEffect(() => {
        if (albumInfo && albumInfo.status === 200) {
            navi(`/useralbum/${decode.Id}`);
            dispatch({ type: ALBUM_CLEAR })
        }
    }, [albumInfo, navi, dispatch, albumPhoto])

    const submitHandler = (e) => {
        if (userInfo) {

            e.preventDefault();
            // const musicians=musicians.userId
            const newAlbum = {
                name,
                songCount,
                recordLable,
                isFeatured,
                isNew,
                albumPhoto,
                userId: decode.Id
                // albumsId: parseInt(albumId),
            }
            dispatch(albumAdd(newAlbum))
        }
    }
    return (
        <>
            <section id="pager-section">
                <div className="album-bg"></div>
                <div className="container">
                    <div className="pager-content text-center">
                        <h2 >Add Album</h2>
                    </div>
                </div>
            </section>
            <Toast />
            {
                userInfo?(

            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={submitHandler} encType="multipart/form-data" >
                    <div className="content-header">
                        <Link to="/addlive" className="btn btn-danger text-white">
                            Add Live SHow
                        </Link>
                        <Link to="/artist" className="btn btn-danger text-white">
                            Add Music
                        </Link>
                        <Link to={`/useralbum/${decode.Id}`} className="btn btn-danger text-white">
                            Go to Albums
                        </Link>
                        <h2 className="content-title">Add Album</h2>
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
                                            Album Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="form-control"
                                            id="product_title"
                                            required
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">

                                        <label htmlFor="product_trailer" className="form-label">
                                            Record Lable
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="form-control"
                                            id="product_trailer"
                                            required
                                            value={recordLable}
                                            onChange={e => setRecordLable(e.target.value)}
                                        />

                                    </div>
                                    {/* <div className="mb-4">
                                        <label htmlFor="product_featured" className="form-label">
                                            Is Featured?
                                        </label>
                                        <input
                                            type="checkbox"
                                            id="product_price"
                                            value={isFeatured}
                                            hidden
                                            onChange={(e) => { setIsFeatured(e.target.checked ? true : false) }}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_featured" className="form-label">
                                            Is New?
                                        </label>
                                        <input
                                            type="checkbox"
                                            id="product_price"
                                            value={isNew}
                                            onChange={(e) => { setIsNew(e.target.checked ? true : false) }}
                                        />
                                    </div> */}
                                    <div className="mb-4">
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            component="label"
                                        >
                                            Upload File
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
                ): <div className='p-5'>
                <span style={{ fontSize: "20px" }}>You dont have a Account please</span>
                <Link to="/login" style={{ fontSize: "20px" }}>  Login</Link>

            </div>
            }
        </>
    )
}

export default AddAlbum