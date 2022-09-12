import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/BaseConfig";
import "./Album.scss";
const AlbumDiscover = () => {
  const [album, setAlbum] = useState([]);
  const getAlbum = () => {
    fetch(`${BASE_URL}api/Albums/GetAll`)
      .then((c) => c.json())
      .then((c) => setAlbum(c));
  };
  useEffect(() => {
    getAlbum();
  }, []);
console.log(album);
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
                    <Link to={`/album/${c.id}`}>
                      <img className="img-fluid" src={c.albumPhoto} alt="ef" />
                    </Link>
                  </div>
                  <div className="album-detail">
                    <h3>
                      <Link to={`/album/${c.id}`}>{c.name}</Link>
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
