import { Alert } from 'bootstrap';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { registerAction } from '../Redux/Actions/UserAction';
import { CLEAR_USER_REGISTER } from '../Redux/Constants/UserConstants';

const Register = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const myUserInfo = useSelector(st => st.register)
  const navi = useNavigate()
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(registerAction(firstName, lastName, email, password, confirmPassword));
  };
  useEffect(() => {
    if (myUserInfo.userInfo && myUserInfo.userInfo.status === 201) {
      Swal.fire({
        icon: "success",
        title: "Təbriklər! Sizin hesabınız müvəffəqiyyətlə yaradıldı! Sehifeye giriş etmek üçün  LogIn edin zehmet olmasa",
        showConfirmButton: false,
        timer: 1500,
      }).then((c) => {
        navi("/login");
        dispatch({ type: CLEAR_USER_REGISTER })

      });
    } 
  }, [myUserInfo.userInfo, navi])
  return (
    <>
      <section id='LiveShow'>
        <section id="pager-section">
          <div className="album-bg"></div>
          <div className="container">
            <div className="pager-content text-center">
              <h2>Register</h2>
              <alert variant="outlined" severity="error">
            {error}
          </alert>
            </div>
          </div>
        </section>
        <section id='background-clr'>
          {/* <div className="section-title text-center wow slideInUp" >
                    <h2>New Album Tour 2021</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, debitis?</span>
                </div> */}
        </section>
      </section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="fs-5 mb-4">Register</h1>

            <form method="post" onSubmit={submitForm}>
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Firstname"
                  type="name"
                  id="form2Example1"
                  required={true}
                  className="form-control"
                />
                {firstName.length > 10 && "name is so long for "}
                <label className="form-label" for="form2Example1">
                  Firstname
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="lastname"
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  required={true}

                />
                <label className="form-label" for="form2Example1">
                  Lastname
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
                <label className="form-label" for="form2Example1">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="form2Example2"
                  required={true}

                  className="form-control"
                />
                <label className="form-label" for="form2Example2">
                  Password
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  id="form2Example2"
                  required={true}

                  className="form-control"
                />
                <label className="form-label" for="form2Example2">
                  Confirm Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      required={true}

                      checked
                    />
                    <label className="form-check-label" for="form2Example31">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign Up
              </button>

              <div className="text-center">
                <p>
                  Already have a Account ?<Link to="/login">Login</Link>
                </p>
                {/* <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register