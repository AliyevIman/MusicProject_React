import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../pages/albums/Album.scss"
import { BeArtistAction, EditUserAction } from '../../Redux/Actions/UserAction';
import Loading from '../LoadingError/Loading';
import ArtistHeader from './ArtistHeader';
import "./BeArtist.scss"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useCallback } from 'react';
const BeArtist = () => {

  const child = useCallback(() => <ArtistHeader />, []);

  const validationSchema = Yup.object().shape({
    accept: Yup.bool()
      .oneOf([true], 'Accept Ts & Cs is required'),
    accept2: Yup.bool()
      .oneOf([true], 'Accept Ts & Cs is required')

  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState: { errors } } = useForm(formOptions);


  const dispatch = useDispatch();
  const navi = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useSelector(st => st.loginUser);


  if (userInfo) {
    var decode = jwtDecode(userInfo.token.result.token);
  }

  // console.log(decode);
  const submitForm = (data, e) => {
    console.log(data);
    try {
      e.preventDefault();
      // && email !== "" && roleName !== ""
      if (userInfo && data.accept == true && data.accept2 == true) {
        const obj = {
          email: userInfo.email,
          roleName: "Artist"
        }

        dispatch(BeArtistAction(obj));
        Swal.fire({
          icon: "success",
          title: "Təbriklər! Sizin hesabınız müvəffəqiyyətlə Artist olaraq qeydiyyatdan kecdiniz ",
          showConfirmButton: false,
          timer: 1500,
        })

      } else {
        Swal.fire({
          icon: "error",
          title: "pealse check a boxes ",
          showConfirmButton: false,
          timer: 1500,
        })
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
      {/* {
      isLoading==false&&
      <Loading/>
    } */}
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
         {child}
        ) : (
          <section>
            {
              userInfo ? (
                <form method='post' onSubmit={handleSubmit(submitForm)}>
                  <div className="form-control mb-4">
                    <label className="form-label" for="form2Example1">
                      hey
                    </label>

                    <input
                      type="checkbox"
                      id="form2Example2"
                      className={`form-check-input ${errors.accept ? 'is-invalid' : ''}`}
                      {...register('accept')}
                    />
                    <div className="invalid-feedback">{errors.accept?.message}</div>
                  </div>
                  <div className="form-control mb-4">
                    <lable className="form-label" for="form2Example2" >Do You wanna be a Artist</lable>
                    <input
                      type="checkbox"
                      className={`form-check-input ${errors.accept2 ? 'is-invalid' : ''}`}
                      id="form2Example2"
                      {...register('accept2')}

                    />
                    <div className="invalid-feedback">{errors.accept2?.message}</div>

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