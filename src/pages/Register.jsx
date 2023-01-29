
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { registerAction } from '../Redux/Actions/UserAction';
import { CLEAR_USER_REGISTER } from '../Redux/Constants/UserConstants';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
// import { useForm } from "react-hook-form";
const Register = () => {
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
    });
    // Google siginUp 
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const {userInfo} = useSelector(st => st.register)
  console.log(userInfo);
  const navi = useNavigate()
  const submitForm = (data,e) => {
   e.preventDefault();
    if(data.password!==data.confirmPassword){
      Swal.fire({
        icon: "error",
        title: "Password ve confirm password eyni deyil ,Zehmtet olmasa yeniden yoxlayin",
        showConfirmButton: false,
        timer: 1500,
      })
    }else{
      dispatch(registerAction(data));

    }
    // data.preventDefault();
  };
  useEffect(() => {
    if (userInfo && userInfo.status === 201) {
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

  }, [userInfo, navi])
  //
  
  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };
console.log(profile)
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

            <form method="post" onSubmit={handleSubmit( submitForm)}>
              <div className="form-outline mb-4">
                <input
                  placeholder="Firstname"
                  
                  type="name"
                  id="form2Example1"
                  className="form-control"
                  {...register("firstName", { required: true, maxLength: 10 })}
                />
                {/* {firstName.length > 10 && "name is so long for "} */}
                <label className="form-label" for="form2Example1">
                  Firstname
                </label>
                {errors.firstName && <p>Please check the First Name,maksimum uzunluq 10 olmalidir </p>}
              </div>
              <div className="form-outline mb-4">
                <input
                  placeholder="lastname"
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  {...register("lastName",{required:true,maxLength:10})}

                />
                <label className="form-label" for="form2Example1">
                  Lastname
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2@Example.com"
                  className="form-control"
                  placeholder='Email Adress'
                  {...register("email",
                    {
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
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
                  placeholder='Password'
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })}
                  className="form-control"
                />
                <label className="form-label" for="form2Example2">
                  Password
                </label>
                {errors.password && <p>Parol boyuk herifle basm=lamali ve reqem olmalidir icinde </p>}
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  placeholder='Confirm Password'

                  required={true}
                  {...register("confirmPassword", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })}
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

export default Register