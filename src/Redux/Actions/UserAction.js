import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { USER_BEARTIST_ERROR, USER_BEARTIST_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS } from "../Constants/UserConstants";

export const registerAction =(firstName,lastName,email,password,confirmPassword)=>async(dispatch)=>{
    try {
        const {data}= await axios.post(`${BASE_URL}api/Account/register`,{firstName,lastName,email,password,confirmPassword}).then(function (reponse){
            console.log(reponse);
        }).catch(function(error){
            console.log(error);
        });
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({  
            type:"USER_REGISTER_ERROR",
            payload:error
        }) 
    }
}

export const loginAction=(email,password)=>async(dispatch)=>{
    try {
       const {data}=await axios.post(`${BASE_URL}api/Account/login`,{email,password})
       dispatch({
           type:USER_LOGIN_SUCCESS,
           payload:data
      })      
      localStorage.setItem("userInfo",JSON.stringify(data))  

  } 
  catch (error) {
      dispatch({
          type:USER_LOGIN_ERROR,
          payload:error.message
      })  
  }
}
export const logoutAction=()=>(dispatch)=>{
  localStorage.removeItem("userInfo")
  dispatch({type:USER_LOGOUT})
}





export const BeArtistAction =(email,roleName)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(`${BASE_URL}api/Account/AddUserToRole?email=${email}&roleName=${roleName}`,).then(function (reponse){
            dispatch({
                type:USER_BEARTIST_SUCCESS,
                payload:reponse.data,
           }) 
       localStorage.setItem("roleInfo",JSON.stringify(reponse.data))    

        }).catch(function(error){
            console.log(error);
        });
           

 
   } 
   catch (error) {
       dispatch({
           type:USER_BEARTIST_ERROR,
           payload:error.message
       })  
   }
}