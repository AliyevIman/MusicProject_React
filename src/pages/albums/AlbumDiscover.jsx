import { Album } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/BaseConfig";
import Loading from "../../components/LoadingError/Loading";
import { AlbumAction } from "../../Redux/Actions/AlbumAction";
// import "./Album.scss";
const AlbumDiscover = () => {
  const [album, setAlbum] = useState([]);
  console.log(album);
  const navigate = useNavigate()
  // console.log(album);
  const dispatch = useDispatch();
  // const { albumitems } = useSelector((state) => state.cart);
  // console.log(albumitems);
  const submitform = (obj) => {
    // e.preventDefault();
    const [{ musicUrl, name }] = obj.music;
    // console.log(musicUrl);
    // console.log(obj.music);
    // const {musicUrl} = obj.music.musicUrl[0];
    // const {name} =obj.music.name[0];
    const nameMusician = obj.name;
    const cover = obj.albumPhoto;

    const objSingle =
    [
            {
                singer: name,
                cover,
                name: obj.name,
                musicSrc: [obj.musicUrl]
            }


        ];
    // console.log(objSingle);
    dispatch(AlbumAction(objSingle));
  };
  const getAlbum = () => {
    fetch(`${BASE_URL}api/Musician/GetAllUserAlbum`)
      .then((c) => c.json())
      .then((c) => setAlbum(c));
  };
  useEffect(() => {
    getAlbum();
  }, []);
  // const handlerAlbum = (id) => {
  //   dispatch(AlbumAction(id));
  // };
  // albumdetail
  // onClick={() => {history( /userUpdate,{ state: { id: value.id } })}}
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
          <div className="album-list row mt-5">
            {
              album.length == 0 ? (<Loading />)
                :
                album.map((c) => (
               c.albums.map(alb=>(
                alb.isNew==true&&
                <div className="col-lg-4 col-md-6 col-sm-6">
                
                <div onClick={()=>navigate("/albumdetail",{state:{id:alb.id,name:c.firstname}})} className="album-col">
                  <div className="album-thumb">
                    {/* onClick={() => submitform(c)} */}
                    <div >
                      <img className="img-fluid" src={alb.albumPhoto} alt="ef" />
                    </div>
                  </div>
                  <div className="album-detail">
                    <h3>
                      {/* onClick={() => submitform(c)} */}
                      <p >{c.firstname}</p>
                    </h3>
                    <span>{alb.name}</span>
                  </div>
                </div>
            </div>
               ))

                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDiscover;