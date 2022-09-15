import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS } from "../Constants/UserConstants";

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