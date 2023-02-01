import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { USER_BEARTIST_ERROR, USER_BEARTIST_REQUEST, USER_BEARTIST_SUCCESS, USER_EDIT_ERROR, USER_EDIT_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/UserConstants";
import { signInWithPopup } from 'firebase/auth'



export const googleLoginAction = (auth, provider) => (dispatch) => {
    try {
        signInWithPopup(auth, provider).then((data) => {
            dispatch({ type: "GOOGLE_SIGIN_SUCCESS", payload: data.user })
            console.log(data.user);
            localStorage.setItem("googleInfo", JSON.stringify( data.user))
            console.log(data.user);

        })

    } catch (error) {
        dispatch({
            type: "GOOGLE_SIGIN_ERROR",
            payload: error
        })
    }
}
export const logouGoogletAction = () => (dispatch) => {
    localStorage.removeItem("googleInfo")
    dispatch({ type: "USER_GOOGLE_LOGOUT" })
}






export const registerAction = (datam) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`${BASE_URL}api/Account/register`, JSON.stringify(datam), config);
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

export const loginAction = (datam) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`${BASE_URL}api/Account/login`, JSON.stringify(datam), config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: error.response
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
            type: USER_EDIT_ERROR,
            payload: error.message
        })
    }
}




export const BeArtistAction = (datam) => async (dispatch) => {
    try {
        dispatch({ type: USER_BEARTIST_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const { data } = await axios.post(`${BASE_URL}api/Account/AddUserToRole?email=${datam.email}&roleName=${datam.roleName}`, config)
        dispatch({
            type: USER_BEARTIST_SUCCESS,
            payload: data,
        })
        localStorage.setItem("userInfo", JSON.stringify(data))
    }
    catch (error) {
        dispatch({
            type: USER_BEARTIST_ERROR,
            payload: error.message
        })
    }
}