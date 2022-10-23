import { type } from '@testing-library/user-event/dist/type';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "../../pages/albums/Album.scss"
import { BeArtistAction, EditUserAction } from '../../Redux/Actions/UserAction';
import AddMusic from './AddMusic';
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
    e.preventDefault();
    if (userInfo) {
      dispatch(BeArtistAction(email, roleName));
    }
  }

  return (
    <>
      <section id="pager-section">
        <div className="album-bg"></div>
        <div className="container">
          <div className="pager-content text-center">
            <h2  >Discography</h2>
          </div>
        </div>
      </section>
      {
        userInfo && decode.role[1] === "Artist" ? (
          <AddMusic/>
        ) : (
          <section>
            {
              userInfo?(
                <form method='post' onSubmit={submitForm}>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example1">
                    hey
                  </label>

                  <input
                    onChange={() => setEmail(userInfo.email)}
                    type="checkbox"
                    id="form2Example2"
                  />
                </div>
                <div className="form-outline mb-4">
                  <lable className="form-label" for="form2Example2" >Do You wanna be a Artist</lable>
                  <input
                    onChange={() => setRole("Artist")}
                    type="checkbox"
                    id="form2Example2"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4" > Get Sarted</button>
              </form>
              ):<Link to="/login">Login</Link>
           
            }
          </section>
        )
      }
    </>
  )
}
export default BeArtist