import { type } from '@testing-library/user-event/dist/type';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../pages/albums/Album.scss"
import { BeArtistAction, EditUserAction } from '../../Redux/Actions/UserAction';
import AddMusic from './AddMusic';
import "./BeArtist.scss"
const BeArtist = () => {
  const [email, setEmail] = useState("");
  const [roleName, setRole] = useState("");

  const dispatch = useDispatch();
  const navi = useNavigate()
  const { userInfo } = useSelector(st => st.loginUser);

  // useEffect(() => {
  //   if (decode.role[1] === 'Artist') {
  //     navi("/");
  //   }
  // }, [userInfo, navi]);
  // console.log(roleName);
  // console.log(email);
  if (userInfo) {
    var decode = jwtDecode(userInfo.token.result.token);
  }

  console.log(decode);
  const submitForm = (e) => {
    try {
      e.preventDefault();
      if (userInfo) {
        dispatch(BeArtistAction(email, roleName));
        Swal.fire({
          icon: "success",
          title: "Təbriklər! Sizin hesabınız müvəffəqiyyətlə Artist olaraq qeydiyyatdan kecdiniz ",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navi("/addmusic")
        });
      }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Problem yaşandı zəhmət olmasa yeniden yoxlayın",
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  return (
    <>
      <section id="pager-section">
        <div className="album-bg"></div>
        <div className="container">
          <div className="pager-content text-center">
            <h2 >Artist</h2>
          </div>
        </div>
      </section>
      {
        userInfo && decode.role[0] === "Artist" ? (
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
                There Will be A Good things
              </div>

            </div>

          </div>
        ) : (
          <section>
            {
              userInfo ? (
                <form method='post' onSubmit={submitForm}>
                  <div className="form-control mb-4">
                    <label className="form-label" for="form2Example1">
                      hey
                    </label>

                    <input
                      onChange={() => setEmail(userInfo.email)}
                      type="checkbox"
                      id="form2Example2"
                    />
                  </div>
                  <div className="form-control mb-4">
                    <lable className="form-label" for="form2Example2" >Do You wanna be a Artist</lable>
                    <input
                      onChange={() => setRole("Artist")}
                      type="checkbox"
                      id="form2Example2"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4" > Get Sarted</button>
                </form>
              ) : <div className='p-5'>
                <span style={{ fontSize: "20px" }}>You dont have a Account please</span>
                <Link to="/login" style={{ fontSize: "20px" }}>  Login</Link>

              </div>

            }
          </section>
        )
      }
    </>
  )
}
export default BeArtist