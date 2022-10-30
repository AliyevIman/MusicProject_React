import axios from "axios"
import {
    BASE_URL
} from "../../api/BaseConfig"
import {
    ALBUMUSER_LIST_FAIL,
    ALBUMUSER_LIST_REQUEST,
    ALBUMUSER_LIST_SUCCESS,
    ALBUM_ADD_FAIL,
    ALBUM_ADD_REQUEST,
    ALBUM_ADD_SUCCESS,
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



export const albumAdd=(albumData)=>async(dispatch)=>{
    try {
        dispatch({type:ALBUM_ADD_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const {data} = await axios.post(`${BASE_URL}api/ALbums/AddAlbum`,JSON.stringify(albumData),config)
        dispatch({type:ALBUM_ADD_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ALBUM_ADD_FAIL,payload:error});
    }
}




export const listAlbumUser=(userId,albumId)=>async(dispatch)=>{
    try {
        dispatch({type:ALBUMUSER_LIST_REQUEST})
        const {data} = await axios.get(`${BASE_URL}api/Albums/GetAlbumMusic/${userId}/${albumId}`)

        dispatch({type:ALBUMUSER_LIST_SUCCESS,payload:data})
            
    } catch (error) {
        dispatch({type:ALBUMUSER_LIST_FAIL,payload:error})
    }
}
