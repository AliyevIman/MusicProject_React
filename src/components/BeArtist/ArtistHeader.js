import jwtDecode from 'jwt-decode';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ArtistHeader = () => {
  const { userInfo } = useSelector(st => st.loginUser);
  if (userInfo) {
    var decode = jwtDecode(userInfo.token.result.token);
  }

  return (
    <div id='artist-header'>
    <div className="row">
      <div className='col-lg-4' style={{ display: 'grid' }}>
        <Link to="/addlive" className="btn btn-danger text-white">
          Add Live Show
        </Link>
        <Link to="/" className="btn btn-danger text-white ">
          Go to Live
        </Link>
        <Link to="/addalbum" className="btn btn-danger text-white">
          Add Album
        </Link>
        <Link to={`/useralbum/${decode.Id}`} className="btn btn-danger text-white">
          Go to Albums
        </Link>
        <Link to="/addmusic" className="btn btn-danger text-white">
          Add Music
        </Link>
      </div>
      <div className="col-lg-8">

        Good things will happen heres
      </div>

    </div>

  </div>
  )
}

export default ArtistHeader