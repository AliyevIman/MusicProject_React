import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../../pages/albums/Album.scss"
import { BeArtistAction } from '../../Redux/Actions/UserAction';
const BeArtist = () => {
  const [email, setEmail] = useState("");
  const [roleName, setRole] = useState("");

  console.log(roleName);
  console.log(email);
  const dispatch = useDispatch();
  const navi = useNavigate()

  const  myRoleInfo= useSelector(st => console.log(st.role.roleinfo))
  const {userInfo } = useSelector(st => st.loginUser);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(BeArtistAction(email, roleName));
  };
  useEffect(() => {
    if (myRoleInfo.roleInfo && myRoleInfo.roleInfo.status === 200) {
      navi("/")
    }
  }, [myRoleInfo.roleInfo, navi])


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

      <section>
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
      </section>
    </>

  )
}

export default BeArtist