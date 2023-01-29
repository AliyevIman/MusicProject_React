import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../Redux/Actions/UserAction'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CLEAR_USER } from '../Redux/Constants/UserConstants';
import Swal from 'sweetalert2';
import { Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';

const Login = () => {
    // Google siginUp 
    const [profile, setProfile] = useState([]);
    const clientId = '69753538296-a5ecnn0rbc3921r2lu6soj658a4t4v3a.apps.googleusercontent.com';
  console.log(profile);
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', start);
    sessionStorage.setItem("edfewf", profile)
    if (profile.googleId) {
      navi("/")
    }
  });

    // Google siginUp 

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [errorMessage, setErrorMessage] = useState("")
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { userInfo } = useSelector(st => st.loginUser);
  // console.log(userInfo);
  const submitForm = (data, e) => {
    e.preventDefault();
    dispatch(loginAction(data))

  }



  useEffect(() => {
    if (userInfo) {


      if (userInfo.status === 200) {

        navi('/')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Bir xəta baş verdi.',
          text: 'Emailiniz və ya şifrəniz yanlışdır!'
        })
      }

    }
  }, [userInfo, navi])
  // ----------Google ----
  //
  
  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const logOut = () => {
    setProfile(null);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  return (
    <>

      <section id='LiveShow'>
        <section id="pager-section">
          <div className="album-bg"></div>
          <div className="container">
            <div className="pager-content text-center">
              <h2>Login</h2>

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
            <h1 className="fs-5 mb-4">Login</h1>
            {errorMessage && (
              <Alert variant="outlined" severity="error">
                {errorMessage}
              </Alert>
            )}
            <form method="post" onSubmit={handleSubmit(submitForm)}>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  {...register("email",
                    {
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                  className="form-control"
                />
                <label className="form-label" for="form2Example1">
                  Email address
                </label>
                {errors.email && <p style={{ color: "red" }} className="text-error">Please check the Email</p>}

              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })}
                  className="form-control"
                />
                <label className="form-label" for="form2Example2">
                  Password
                </label>
                {errors.password && <p style={{ color: 'red' }}>Parol boyuk herifle başlamalı ve içinde reqem olmalidir  </p>}

              </div>
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
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
                  Not a member? <Link to="/register">Register</Link>
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
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login