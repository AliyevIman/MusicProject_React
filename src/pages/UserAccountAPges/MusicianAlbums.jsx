import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/BaseConfig';

const MusicianAlbums = () => {
  const { id } = useParams();

  const [userAlbum, setUserAlbum] = useState([]);
  console.log(userAlbum.musics);
  // console.log(userMusic.musics === undefined ? ("fuck") : userMusic.musics.map(c => c.music.photo));
  const getUserAlbum = (myId) => {
      fetch(`${BASE_URL}api/Musician/GetmusicianAlbum/${myId}`)
          .then((c) => c.json())
          .then((s) => setUserAlbum(s));
  };
  useEffect(() => {
    getUserAlbum(id);
  }, [id])
  return (
    <>
    <section id="pager-section">
        <div className="album-bg"></div>
        <div className="container">
            <div className="pager-content text-center">
                <h2>{userAlbum.firstname}s Albums</h2>
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
                <h2>Your Albums </h2>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam, explicabo!
                </span>
            </div>
            <div className="album-list row">
                {
                    userAlbum.albums ===undefined ? (<h1>loading</h1>)
                        : userAlbum?.albums.map(c => (
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="album-col">
                                    <div className="album-thumb">
                                        <img className="img-fluid" src={c.albumPhoto} alt="Your Music Image" />
                                    </div>
                                    <div className="album-detail">
                                        <h5>
                                            <p>Album Name: {c.name}</p>
                                        </h5>
                                    <h5>Record Lable : {c.recordLable}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                }
                {
                    userAlbum.albums===undefined?(
                        <h1>Some Problems oldu </h1>
                    ):
                    userAlbum.albums.length==0 &&<p>Album Is Empty.<Link to="/addalbum">Do You Want to Be A Artist?</Link>  </p>
                }


            </div>
        </div>
    </section>
</>
  )
}

export default MusicianAlbums