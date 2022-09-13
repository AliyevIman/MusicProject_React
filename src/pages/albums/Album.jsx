// import './App.css';
// import Player from './Player/Player';
// import { songsdata } from './Player/audios';
import {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/BaseConfig";

const Album = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState(null);

  const getAlbum = (myid) => {
    fetch(`${BASE_URL}api/Albums/${myid}`)
      .then((c) => c.json())
      .then((c) => setSongs(c));
  };
  useEffect(() => {
    getAlbum(id);
  }, [id]);
 



  return (
      <>

      </>
  
  );
};

export default Album;