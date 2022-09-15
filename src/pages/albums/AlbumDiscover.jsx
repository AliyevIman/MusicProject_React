import { Album } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/BaseConfig";
import { AlbumAction } from "../../Redux/Actions/AlbumAction";
import "./Album.scss";
const AlbumDiscover = () => {
  const [album, setAlbum] = useState([]);
 
  const dispatch = useDispatch();
  const { albumitems } = useSelector((state) => state.cart);

  const submitform = (obj) => {
    // e.preventDefault();
    const {musicUrl,name}= obj.music[0];
    // const {musicUrl} = obj.music.musicUrl[0];
    // const {name} =obj.music.name[0];
    const nameMusician = obj.musician.name;
    const cover = obj.albumPhoto;

    const objSingle = 
      {
      singer: nameMusician,
      cover,
      name,
      musicSrc: musicUrl,
      } 
    ; 
    console.log(objSingle);
    dispatch(AlbumAction(objSingle));
  };
  const getAlbum = () => {
    fetch(`${BASE_URL}api/Albums/GetAll`)
      .then((c) => c.json())
      .then((c) => setAlbum(c));
  };
  useEffect(() => {
    getAlbum();
  }, []);
  // const handlerAlbum = (id) => {
  //   dispatch(AlbumAction(id));
  // };

  return (
    <>
      <section id="pager-section">
        <div className="album-bg"></div>
        <div className="container">
          <div className="pager-content text-center">
            <h2>Discography</h2>
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
            <h2>Feature Music Albums</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, explicabo!
            </span>
          </div>
          <div className="album-list row">
            {album.map((c) => (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="album-col">
                  <div className="album-thumb">
                    <div onClick={() => submitform(c)}>
                      <img className="img-fluid" src={c.albumPhoto} alt="ef" />
                    </div>
                  </div>
                  <div className="album-detail">
                    <h3>
                      <p onClick={() => submitform(c)}>{c.name}</p>
                    </h3>
                    <span>{c.musician.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDiscover;
