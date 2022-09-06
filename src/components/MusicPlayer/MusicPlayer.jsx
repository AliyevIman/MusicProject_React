import React from "react";
// import * as React from "react";
// import ReactDOM from "react-dom";
import { BASE_URL } from "../../api/BaseConfig";
import "../MusicPlayer/MusicPlayer.scss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const MusicPlayer = () => {
  const [Music, setMusic] = React.useState([]);
  const getMusic = () => {
    fetch(BASE_URL + "api/Musician/GetAll")
      .then((c) => c.json())
      .then((c) => setMusic(c));
  };
  React.useEffect(() => {
    getMusic();
  }, []);

  // if (Music) {
  //   Music.forEach((mus) => {
  //     mus.musics.forEach((item) => {
  //       const { authorName } = item.music;
  //       console.log(authorName);
  //     });
  //   });
  // }

  const audioList1 = [
      {
      name:"wf" ,
      singer: Music.map(s=>(
        s.name
      ))
      // cover:
      //   "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      // musicSrc:
      //   "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await   fetch(BASE_URL + "api/Musician/GetAll")
      //   .then((c) => c.json())
      //   // .then((c) => setMusic(c));
      // },
    },
    // {
    //   name: 'Dorost Nemisham',
    //   singer: 'Sirvan Khosravi',
    //   cover:
    //     'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    //   musicSrc:
    //     'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    // },
  ];

  return (
    <>
      {/* {Music.map((c) => console.log(c.isNew&&c.name))} */}
      <ReactJkMusicPlayer
        audioLists={audioList1}
        autoPlay={false}
        // toggleMode={false}
        // mode="full"
      />
    </>
  );
};
export default MusicPlayer;
