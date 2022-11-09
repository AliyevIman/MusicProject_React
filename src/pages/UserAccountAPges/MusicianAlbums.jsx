import jwtDecode from 'jwt-decode';
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/BaseConfig';
import Loading from '../../components/LoadingError/Loading';
import { albumAdd, listAlbumUser } from '../../Redux/Actions/AlbumAction';
import "../albums/Album.scss";
const MusicianAlbums = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    //   const [albumId, setAlbumId] = useState(null);
    //   console.log(albumId);
    const { userInfo } = useSelector(st => st.loginUser);
    if (userInfo) {
        var decode = jwtDecode(userInfo.token.result.token);
    }
    const { albumuser, loading } = useSelector(state => state.albumUserRed)
    console.log(albumuser);
    const submitHandler = (albumId) => {
        // e.preventDefault();

        dispatch(listAlbumUser(id, albumId));
        setIsActive(!isActive)
    }

    const onClick = () => {
        setIsActive(!isActive)
    };
    const [userAlbum, setUserAlbum] = useState([]);
    //   console.log(userAlbum);
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
                        <h2>{userAlbum.firstname}'s Albums</h2>
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
                    <div className="album-list row  mt-5">
                        {
                            userAlbum.albums === undefined ? (<h1>loading</h1>)
                                : userAlbum?.albums.map(c => (
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        {/* onClick={onClick} */}
                                        <div className="album-col">
                                            <Link to={`/albumdetail/${id}/${c.id}`} >
                                                <div className="album-thumb">
                                                    <img className="img-fluid" src={c.albumPhoto} alt="Your Music Image" />
                                                </div>
                                            </Link>

                                            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                                                <ul>
                                                    {
                                                        albumuser.music === undefined ? (<h1>hehe</h1>) :
                                                            albumuser.music.map(c => (
                                                                <audio controls>
                                                                    <source src={c.musicUrl} />
                                                                </audio>
                                                            ))
                                                    }
                                                </ul>
                                            </nav>
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
                            userAlbum.albums === undefined ? (
                                <Loading />
                            ) :
                                userAlbum.albums.length == 0 && <p>Album Is Empty.<Link to="/addalbum">Do You Want to Be A Artist?</Link>  </p>
                        }


                    </div>
                </div>
            </section>
        </>
    )
}

export default MusicianAlbums