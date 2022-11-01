import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { USER_BEARTIST_ERROR, USER_BEARTIST_REQUEST, USER_BEARTIST_SUCCESS, USER_EDIT_ERROR, USER_EDIT_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/UserConstants";

export const registerAction = (firstName, lastName, email, password, confirmPassword) => async (dispatch) => {
    try {
        dispatch({type:USER_REGISTER_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`${BASE_URL}api/Account/register`, { firstName, lastName, email, password, confirmPassword },config);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "USER_REGISTER_ERROR",
            payload: error
        })
    }
}

export const loginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({type:USER_LOGIN_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`${BASE_URL}api/Account/login`, { email, password },config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: error.message
        })
    }
}
export const logoutAction = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({ type: USER_LOGOUT })
}

// Just in Localstorage
export const EditUserAction = (key) => async (dispatch) => {
  try {
    dispatch({ type: USER_EDIT_SUCCESS, payload: key })
    
  } catch (error) {
    dispatch({
        type:USER_EDIT_ERROR,
        payload:error.message
    })
  }
}




export const BeArtistAction = (email, roleName) => async (dispatch) => {
    try {
        dispatch({type:USER_BEARTIST_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`${BASE_URL}api/Account/AddUserToRole?email=${email}&roleName=${roleName}`,config)
        dispatch({
            type: USER_BEARTIST_SUCCESS,
            payload: data,
        })
        localStorage.setItem("userInfo",JSON.stringify(data))
    }
    catch (error) {
        dispatch({
            type: USER_BEARTIST_ERROR,
            payload: error.message
        })
    }
}