import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { BASE_URL } from '../api/BaseConfig';
import Loading from '../components/LoadingError/Loading';
import { AlbumAction } from '../Redux/Actions/AlbumAction';

const AlbumDetail = () => {

    const { state } = useLocation();
    const { id } = state;
    const { name } = state;
    const dispatch = useDispatch();
    const submitform = (obj) => {
        console.log(obj);
        // const musicUrl = obj.muiscUrl;
        // const nameMusician = name;
        const cover = obj.photo;
        const objSingle =
            [
                    {
                        singer: name,
                        cover,
                        name: obj.name,
                        musicSrc: [obj.musicUrl]
                    }
            ];
        console.log(objSingle);
        dispatch(AlbumAction(objSingle));
    };
    const [albumMusic, setAlbumMusic] = useState([])
    // console.log(albumMusic);
    // console.log(id);
    const GetAlbumMusic = () => {
        fetch(`${BASE_URL}api/Albums/music/${id}`)
            .then((c) => c.json())
            .then((s) => setAlbumMusic(s));
    };
    useEffect(() => {
        GetAlbumMusic();
    }, [id])
    return (
        <>
            <section id="pager-section">
                <div className="album-bg"></div>
                <div className="container">
                    <div className="pager-content text-center">
                        <h2>{albumMusic.name}</h2>
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
                            albumMusic.music === undefined ? (<Loading />)
                                :
                                albumMusic.music.map(c => (
                                    <div onClick={() => submitform(c)} className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className="album-col">
                                            <div className="album-thumb">
                                                <img className="img-fluid" src={c.photo} alt="Your Music Image" />
                                            </div>
                                            <div className="album-detail">
                                                <h5>
                                                    <p>{c.name}</p>
                                                </h5>
                                                <h3>
                                                    <p>{name}</p>
                                                </h3>
                                                <audio controls>
                                                    <source src={c.musicUrl} />
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                        {
                            albumMusic.music === undefined ? (
                                <Loading />
                            ) :
                                albumMusic.music.length == 0 && <p>Album's Music Is Empty.<Link to="/artist">Do You Want to Be A Artist?</Link>  </p>
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