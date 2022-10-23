import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import { MUSIC_ADD_FAIL, MUSIC_ADD_REQUEST, MUSIC_ADD_SUCCESS } from "../Constants/MusicConstans";

export const musicAdd=(musicData)=>async(dispatch)=>{
    try {
        dispatch({type:MUSIC_ADD_REQUEST});
        const config={
            headers:{
                "Content-Type": "application/json",
            }
        }
        const {data} = await axios.post(`${BASE_URL}api/Music/AddMusic`,JSON.stringify(musicData),config)
        dispatch({type:MUSIC_ADD_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:MUSIC_ADD_FAIL,payload:error});
    }
}

// export const musicUpdateAction=(courseEditData)=>async(dispatch)=>{
//     try {
//         const config={
//             headers:{
//                 "Content-Type": "application/json",
//             }
//         }
//         dispatch({type:COURSE_UPDATE_REQUEST});
//         const {data} =await axios.put(`${BASE_URL}/course/${courseEditData.id}`,
//         JSON.stringify(courseEditData), config
//         )
//         console.log(data)
//         dispatch({type:COURSE_UPDATE_SUCCESS,payload:data});
//         dispatch({type:COURSE_EDIT_SUCCESS,payload:data.data});

//     } catch (error) {
//         dispatch({type:COURSE_UPDATE_FAIL,payload:error});
//     }
// }

// export const musicListAction=()=>async(dispatch)=>{
//     try {
//         dispatch({type:COURSE_LIST_REQUEST});
//         const {data} = await axios.get(`${BASE_URL}/course`)
//         dispatch({type:COURSE_LIST_SUCCESS,payload:data});
//     } catch (error) {
//         dispatch({type:COURSE_LIST_FAIL,payload:error});
//     }
// }

// export const musicEditAction=(id)=>async(dispatch)=>{
//     try {
//         dispatch({type:COURSE_EDIT_REQUEST});
//         const {data} = await axios.get(`${BASE_URL}/course/${id}`)
//         dispatch({type:COURSE_EDIT_SUCCESS,payload:data});
//     } catch (error) {
//         dispatch({type:COURSE_EDIT_FAIL,payload:error});
//     }
// }

// export const musicDelete=(id)=>async(dispatch)=>{
//     try {
//         dispatch({type:COURSE_DELETE_REQUEST})
//         const {data} = await axios.delete(`${BASE_URL}/course/${id}`)
//         dispatch({
//             type:COURSE_DELETE_SUCCESS,
//             payload:data
//         })
//     } catch (error) {
//         dispatch({
//             type:COURSE_DELETE_FAIL,
//             payload:error
//         })
//     }
// }





