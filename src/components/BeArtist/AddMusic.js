import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { listAlbum } from '../../Redux/Actions/AlbumAction';
import { musicAdd } from '../../Redux/Actions/MusicAction';
import { MUSIC_CLEAR } from '../../Redux/Constants/MusicConstans';
import Loading from '../LoadingError/Loading';
import Toast from '../LoadingError/Toast';
const AddMusic = () => {
    const dispatch = useDispatch();
    const [Name, setName] = useState("")
    const [musicUrl, setMusicUrl] = useState("")
    const [musicVideo, setMusicVideo] = useState("")
    const [author, setAuthor] = useState("")
    const [isFeatured, setIsFeatured] = useState(false)
    const [photo, setPhoto] = useState("")
    const [albumId, setAlbumId] = useState(null)
    console.log(albumId);
    const { albums } = useSelector(state => state.albumList)

    const { musicInfo, loading } = useSelector(state => state.addedMusicRed)
    const navi = useNavigate();
    useEffect(() => {
        if (musicInfo && musicInfo.status === 200) {
            navi("/");
            dispatch({ type: MUSIC_CLEAR })
        }
    }, [musicInfo, navi, dispatch])
    useEffect(() => {
        dispatch(listAlbum())
        // dispatch(listInstructors())
    }, [dispatch])
    const submitHandler = (e) => {
        e.preventDefault();
        const newMusic = {
            Name,
            musicUrl,
            musicVideo,
            authorName: author,
            isFeatured,
            photo,
            albumId: parseInt(albumId),
            //   instructorId:parseInt(instructorId),
            //   reyting:0
        }
        dispatch(musicAdd(newMusic))
    }
    return (
        <>
            <Toast />
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={submitHandler}>
                    <div className="content-header">
                        <Link to="/" className="btn btn-danger text-white">
                            Go to Musics
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
                                    {/* {error && <Message variant="alert-danger">{er   ror}</Message>} */}
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

                                    <div className="mb-4">
                                        <label htmlFor="product_categories" className="form-label">
                                            Albums
                                        </label>
                                        <select id="product_categories"
                                            onChange={e => setAlbumId(e.target.value)}
                                            className="form-control" defaultValue="-">
                                            <option option disabled value="-">select albums...</option>
                                            {albums?.map(album => (
                                                <option key={album.Id}
                                                    value={album.Id}>{album.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_trailer" className="form-label">
                                            musicUrl
                                        </label>
                                        <input
                                            type="file"
                                            placeholder="Type here"
                                            className="form-control"
                                            id="product_trailer"
                                            required
                                            value={musicUrl}
                                            onChange={e => setMusicUrl(e.target.value)}
                                        />
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
                                        <label className="form-label">Images</label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            placeholder="Enter Image URL"
                                            value={photo}
                                            onChange={(e) => setPhoto(e.target.value)}
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

export default AddMusic