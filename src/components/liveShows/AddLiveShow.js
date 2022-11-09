import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAlbum } from '../../Redux/Actions/AlbumAction';
import { liveAdd } from '../../Redux/Actions/LiveShowAction';
import { Link, useNavigate } from 'react-router-dom';
import { LIVESHOW_CLEAR } from '../../Redux/Constants/LiveShowConstants';
import Loading from '../LoadingError/Loading';
import Toast from '../LoadingError/Toast';
import { useState } from 'react';
import { PhotoAction } from '../../Redux/Actions/FileUploadAction';
import { Button } from '@mui/material';
const AddLiveShow = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [loacation, setLocation] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [ticketCount, setTicketCount] = useState("")
    const { userInfo } = useSelector(st => st.loginUser);
    const { liveInfo, loading } = useSelector(state => state.addedLiveRed)
    const photoInfo = useSelector(st => st.photoAdd);


    if (userInfo) {
        var decode = jwtDecode(userInfo.token.result.token);
    }
    const fileUploadHandler = async (event) => {
        dispatch(PhotoAction(event))
    }

    const navi = useNavigate();
    useEffect(() => {
        if (liveInfo && liveInfo.status === 200) {
            navi("/");
            dispatch({ type: LIVESHOW_CLEAR })
        }
    }, [liveInfo, navi, dispatch])

    useEffect(() => {
        dispatch(listAlbum())
        // dispatch(listInstructors())
    }, [dispatch])


    const submitHandler = (e) => {
        if (userInfo) {
            
            e.preventDefault();
            // const musicians=musicians.userId
            const newLive = {
                name,
                description,
                loacation,
                stock,
                price,
                discount,
                ticketCount,
                photo: photoInfo.photoInfo.data,
                musicians: [
    
                    {
                        userId: decode.Id
                    }
                ],
                // albumsId: parseInt(albumId),
            }
            dispatch(liveAdd(newLive))
        }
    }
    return (
        <>
            <section id="pager-section">
                <div className="album-bg"></div>
                <div className="container">
                    <div className="pager-content text-center">
                        <h2 >Add Live Show</h2>
                    </div>
                </div>
            </section>
            <Toast />
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <div className='container'>
                    <div className='centered'>
                        {
                            userInfo ? (
                                <>

                                    <div className="content-header">
                                        {/* <Link to="/" className="btn btn-danger text-white ">
                                            Go to Live
                                        </Link> */}
                                        <Link to="/artist" className="btn btn-danger text-white ml-5">
                                            Add Music
                                        </Link>
                                        <Link to="/addalbum" className="btn btn-danger text-white ">
                                            Add Album
                                        </Link>
                                        <h2 className="content-title">Add Live Show</h2>
                                        <div>
                                            <button type="submit" className="btn btn-primary">
                                                Publish now
                                            </button>
                                        </div>
                                    </div>
                                    <form style={{ width: "100%" }} onSubmit={submitHandler}>

                                        <div className="row mb-4">
                                            <div className="col-xl-8 col-lg-8">
                                                <div className="card mb-4 shadow-sm">
                                                    <div className="card-body">
                                                        {/* {error && <Message variant="alert-danger">{error}</Message>} */}
                                                        {loading && <Loading />}
                                                        <div className="mb-4">
                                                            <label htmlFor="product_title" className="form-label">
                                                                Live Show Name
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

                                                            <label htmlFor="product_trailer" className="form-label">
                                                                Location
                                                            </label>

                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="form-control"
                                                                id="product_trailer"
                                                                required
                                                                value={loacation}
                                                                onChange={e => setLocation(e.target.value)}
                                                            />

                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="product_summary" className="form-label">
                                                                Description
                                                            </label>
                                                            <textarea
                                                                type="text"
                                                                rows={5}
                                                                placeholder="Type here"
                                                                className="form-control"
                                                                id="product_summary"
                                                                value={description}
                                                                onChange={e => setDescription(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-4">
                                                            <label htmlFor="product_discount" className="form-label">
                                                                Stock
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="form-control"
                                                                id="product_discount"
                                                                value={stock}
                                                                onChange={(e) => setStock(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="product_featured" className="form-label">
                                                                Price
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="form-control"
                                                                id="product_price"
                                                                value={price}
                                                                onChange={(e) => { setPrice(e.target.value) }}
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="product_featured" className="form-label">
                                                                Discount
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="form-control"
                                                                id="product_price"
                                                                value={discount}
                                                                onChange={(e) => { setDiscount(e.target.value) }}
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="product_featured" className="form-label">
                                                                Ticket Count
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                className="form-control"
                                                                id="product_price"
                                                                value={ticketCount}
                                                                onChange={(e) => { setTicketCount(e.target.value) }}
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
                                </>
                            ) : <div className='p-5'>
                                <span style={{ fontSize: "20px" }}>You dont have a Account please</span>
                                <Link to="/login" style={{ fontSize: "20px" }}>  Login</Link>

                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddLiveShow