import React, { useEffect, useState } from "react";
// import * as React from "react";
// import ReactDOM from "react-dom";
import { BASE_URL } from "../../api/BaseConfig";
import "../MusicPlayer/MusicPlayer.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import Http from "../../hooks/useHttp";

const MusicPlayer = () => {
  const { request } = Http();

  const [Music, setMusic] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    request(BASE_URL + "api/Musician/GetAll").then(setMusic);
  }, []);

  useEffect(() => {
    console.log(Music);
  }, [Music]);


  return (
    <>
      <ReactJkMusicPlayer
        audioLists={Music}
        autoPlay={false}
        // toggleMode={false}
        // mode="full"
      />
    </>
  );
};
export default MusicPlayer;
