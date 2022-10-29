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

const AddAlbum = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [albumPhoto, setAlbumPhoto] = useState("");
    const [recordLable, setRecordLable] = useState("");
    const [songCount, setSongCount] = useState("");
    const [isFeatured, setIsFeatured] = useState(false);
    const [isNew, setIsNew] = useState(false);

    const navi = useNavigate();

    const { userInfo } = useSelector(st => st.loginUser);
    const { albumInfo, loading } = useSelector(state => state.addedAlbumRed)

    if (userInfo) {
        var decode = jwtDecode(userInfo.token.result.token);
    }
    useEffect(() => {
        if (albumInfo && albumInfo.status === 200) {
            navi(`/`);
            dispatch({ type: ALBUM_CLEAR })
        }
    }, [albumInfo, navi, dispatch])

    const submitHandler = (e) => {
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
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={submitHandler}>
                    <div className="content-header">
                        <Link to="/addlive" className="btn btn-danger text-white">
                            Add Live SHow
                        </Link>
                        <Link to="/artist" className="btn btn-danger text-white">
                            Add Music
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
                                        <label className="form-label">Images</label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            placeholder="Enter Image URL"
                                            value={albumPhoto}
                                            onChange={(e) => setAlbumPhoto(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddAlbum