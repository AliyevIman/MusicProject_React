import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SpotifyPlayer from 'react-spotify-player';
import { BASE_URL } from '../../api/BaseConfig';
import "./Album.scss"

const Album = () => {
  const {id} = useParams();
  const [album, setAlbum] = useState(null)
  const getAlbumById = (myId) => {
    fetch(`${BASE_URL}api/Albums/music/${myId}`)
      .then((c) => c.json())
      .then((c) => setAlbum(c));
  };
  useEffect(() => {
    getAlbumById(id);
  }, [id]);
  console.log(album);
    const size = {
        width: '100%',
        height: 300,
      };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'
  return (

    <div className='album'> 
    <SpotifyPlayer
      uri="https://open.spotify.com/playlist/37i9dQZF1E35FLHCmERIh3?si=1bc499427d4549a1"
      size={size}
      view={view}
      theme={theme}
    /></div>
  )
}

export default Album