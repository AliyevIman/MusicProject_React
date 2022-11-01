import React, { useEffect, useState } from "react";
// import * as React from "react";
// import ReactDOM from "react-dom";
import { BASE_URL } from "../../api/BaseConfig";
import "../MusicPlayer/MusicPlayer.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import Http from "../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";

const MusicPlayer = () => {
  // const { request } = Http();
  const { albumitems } = useSelector(state => state.album)
  const dispatch = useDispatch();

  const [Music, setMusic] = useState([]);
  const [list, setList] = useState([]);
  console.log(albumitems);
  useEffect(() => {
    fetch(BASE_URL + "api/Musician/GetAll").then(c => c.json()).then(setMusic);
  }, []);

  // useEffect(() => {
  //   console.log(Music);
  // }, [Music]);

  return (
    <>
      <ReactJkMusicPlayer
        // onDestroyed={true}
        // albumitems?albumitems:
        audioLists={albumitems}
        autoPlay={false}
      // toggleMode={false}
      // mode="full"
      />
    </>
  );
};
export default MusicPlayer;
