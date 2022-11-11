import { error } from "jquery";
import { CLEAR_USER, CLEAR_USER_REGISTER, USER_BEARTIST_ERROR, USER_BEARTIST_REQUEST, USER_BEARTIST_SUCCESS, USER_EDIT_ERROR, USER_EDIT_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_ERROR, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/UserConstants";

export const RegisterReducer=(state={},action)=>{

    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            return {loading:true,userInfo:action.payload} 
            case USER_REGISTER_ERROR:
                return {loading:false,userInfo:action.paload}
                case CLEAR_USER_REGISTER:
                    return {}
        default:
            return state;
    }

}


export const LoginReducer=(state={userInfo:{}},action)=>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
           return {loading:false,userInfo:action.payload}
        case USER_LOGIN_ERROR:
           return {loading:false,userInfo:action.payload}
           case USER_EDIT_SUCCESS:
            return {loading:false, ...state, userInfo:action.payload}
            case CLEAR_USER:
                return {}
         case USER_EDIT_ERROR: 
            return {loading:false,userInfo:action.payload}
           case USER_LOGOUT:
            return {userInfo:null}
        default:
           return state;   
    }
}

export const BeArtistReducer=(state={},action)=>{

    switch (action.type) {
        case USER_BEARTIST_REQUEST:
            return {loading:true}
        case USER_BEARTIST_SUCCESS:
            return { loading:false ,userInfo:action.payload} 
            case USER_BEARTIST_ERROR:
                return {loading:false,error:action.paload}
                case CLEAR_USER:
                    return {}
        default:
            return state;
    }
}