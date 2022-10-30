import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listAlbumUser } from '../../Redux/Actions/AlbumAction';
import Loading from '../LoadingError/Loading';

const AlbumDetail = () => {
    const { userId } = useParams();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        dispatch(listAlbumUser(userId, id));
    }, [userId, id])
    const dispatch = useDispatch();

    const { albumuser, loading } = useSelector(state => state.albumUserRed)

    console.log(albumuser);
    return (
        <>
            <section id="pager-section">
                <div className="album-bg"></div>
                <div className="container">
                    <div className="pager-content text-center">
                        <h2>{albumuser.name}</h2>
                    </div>
                </div>
            </section>
            <section className='album-block'>
                <div className="fixed-bg"></div>
                <div
                    className="section-title v2 text-center wow slideInUp"
                    style={{ visibility: "visible" }}
                >
                    <h2>Your Album's Musics</h2>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quisquam, explicabo!
                    </span>
                </div>
                <div className="container mt-5">
                    <div className="album-list row">
                        {
                            albumuser.music === undefined ? (<Loading />)
                                :
                                albumuser.music.map(c => (
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className="album-col">
                                            <div className="album-thumb">
                                                <img className="img-fluid" src={c.photo} alt="Your Music Image" />
                                            </div>
                                            <div className="album-detail">
                                                <h5>
                                                    <p>{c.name}</p>
                                                </h5>
                                                <audio controls>
                                                    <source src={c.musicUrl} />
                                                </audio>
                                            </div>
                                        </div>
                                    </div>

                                ))
                        }
                        {
                            albumuser.music === undefined ? (
                                <Loading />
                            ) :
                                albumuser.music.length == 0 && <p>Album Is Empty.<Link to="/artist">Do You Want to Be A Artist?</Link>  </p>
                        }

                        <div className="album-detail">

                        </div>
                    </div>




                </div>

            </section>
        </>
    )
}

export default AlbumDetail