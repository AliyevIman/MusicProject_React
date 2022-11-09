import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import { MUSICFILE_ADD_FAIL, MUSICFILE_ADD_REQUEST, MUSICFILE_ADD_SUCCESS, PHOTO_ADD_FAIL, PHOTO_ADD_REQUEST, PHOTO_ADD_SUCCESS } from "../Constants/FileConstants";

export const PhotoAction = (event) => async (dispatch) => {
    try {
        dispatch({ type: PHOTO_ADD_REQUEST });

        const formData = new FormData();
        formData.append('Image', event.target.files[0])

        const res = await axios.post(`${BASE_URL}api/Albums/uploadcover`, formData);

        dispatch({ type: PHOTO_ADD_SUCCESS, payload: res })

    }  catch (error) {
        dispatch({
            type: PHOTO_ADD_FAIL,
            payload: error.message
        })
    }

}

export const MusicFileAddAction = (event) => async (dispatch) => {
    try {
        dispatch({ type: MUSICFILE_ADD_REQUEST });

        const formData = new FormData();
        formData.append('Image', event.target.files[0])

        const res = await axios.post(`${BASE_URL}api/Music/uploadMusic`, formData);

        dispatch({ type: MUSICFILE_ADD_SUCCESS, payload: res })

    }  catch (error) {
        dispatch({
            type: MUSICFILE_ADD_FAIL,
            payload: error.message
        })
    }

}

