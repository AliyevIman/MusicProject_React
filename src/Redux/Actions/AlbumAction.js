import axios from "axios"
import {
    BASE_URL
} from "../../api/BaseConfig"
import {
    ALBUM_GETALL
} from "../Constants/AlbumConstants";

 export const AlbumAction = (objSingle) => (dispatch, getState) => {

    // const {
    //     data
    // } = axios.get(`${BASE_URL}api/Albums/${id}`);

    dispatch({
        type: ALBUM_GETALL,
        payload: objSingle
    })
    localStorage.setItem("albumitems", JSON.stringify(getState().album.albumitems))

}