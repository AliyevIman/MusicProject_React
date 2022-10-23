import axios from "axios"
import {
    BASE_URL
} from "../../api/BaseConfig"
import {
    ALBUM_GETALL, ALBUM_LIST_FAIL, ALBUM_LIST_REQUEST, ALBUM_LIST_SUCCESS
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

export const listAlbum=()=>async(dispatch)=>{
    try {
        dispatch({type:ALBUM_LIST_REQUEST})
        const {data} = await axios.get(`${BASE_URL}api/Albums/GetAll`)
        dispatch({type:ALBUM_LIST_SUCCESS,payload:data})
            
    } catch (error) {
        dispatch({type:ALBUM_LIST_FAIL,payload:error})
    }
}
