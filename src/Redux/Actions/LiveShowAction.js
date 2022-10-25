import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import { LIVESHOW_ADD_FAIL, LIVESHOW_ADD_REQUEST, LIVESHOW_ADD_SUCCESS } from "../Constants/LiveShowConstants";

export const liveAdd=(liveData)=>async(dispatch)=>{
    try {
        dispatch({type:LIVESHOW_ADD_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const {data} = await axios.post(`${BASE_URL}api/LiveShows/AddLive`,JSON.stringify(liveData),config)
        dispatch({type:LIVESHOW_ADD_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:LIVESHOW_ADD_FAIL,payload:error});
    }
}