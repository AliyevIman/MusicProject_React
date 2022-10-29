import jwtDecode from 'jwt-decode';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/BaseConfig';

const UserMusics = () => {
    const { id } = useParams();

    const [userMusic, setUserMusic] = useState([]);
    console.log(userMusic.musics);
    // console.log(userMusic.musics === undefined ? ("fuck") : userMusic.musics.map(c => c.music.photo));
    const getUserMusics = (myId) => {
        fetch(`${BASE_URL}api/Musician/GetMusicMusician/${myId}`)
            .then((c) => c.json())
            .then((s) => setUserMusic(s));
    };
    useEffect(() => {
        getUserMusics(id);
    }, [id])

    return (
        <>
            <section id="pager-section">
                <div className="album-bg"></div>
                <div className="container">
                    <div className="pager-content text-center">
                        <h2>{userMusic.firstname}s Musics</h2>
                    </div>
                </div>
            </section>
            <section className="album-block">
                <div className="fixed-bg"></div>
                <div className="container">
                    <div
                        className="section-title v2 text-center wow slideInUp"
                        style={{ visibility: "visible" }}
                    >
                        <h2>Your Musics </h2>
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Quisquam, explicabo!
                        </span>
                    </div>
                    <div className="album-list row">
                        {
                            userMusic.musics ===undefined ? (<h1>loading</h1>)
                                : userMusic?.musics.map(c => (
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="album-col">
                                            <div className="album-thumb">
                                                <img className="img-fluid" src={c.music.photo} alt="Your Music Image" />
                                            </div>
                                            <div className="album-detail">
                                                <h3>
                                                    <p >{c.music.name}</p>
                                                </h3>
                                                <audio controls >
                                                    <source src={c.music.musicUrl} />
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                        {
                            userMusic.musics===undefined?(
                                <h1>Some Problems oldu </h1>
                            ):
                            userMusic.musics.length==0 &&<p>Music Is Empty.<Link to="/artist">Do You Want to Be A Artist?</Link>  </p>
                        }


                    </div>
                </div>
            </section>
        </>
    )
}

export default UserMusics