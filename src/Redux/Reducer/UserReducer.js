import { USER_BEARTIST_ERROR, USER_BEARTIST_SUCCESS, USER_EDIT_ERROR, USER_EDIT_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_ERROR, USER_REGISTER_SUCCESS } from "../Constants/UserConstants";

export const RegisterReducer=(state={},action)=>{

    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return {userInfo:action.payload} 
            case USER_REGISTER_ERROR:
                return {userInfo:action.paload}
        default:
            return state;
    }

}


export const LoginReducer=(state={},action)=>{
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
           return {userInfo:action.payload}
        case USER_LOGIN_ERROR:
           return {userInfo:action.payload}
           case USER_EDIT_SUCCESS:
            return { ...state, userInfo:action.payload}
         case USER_EDIT_ERROR: 
            return {userInfo:action.payload}
           case USER_LOGOUT:
            return {userInfo:null}
        default:
           return state;   
    }
}

export const BeArtistReducer=(state={},action)=>{

    switch (action.type) {
        case USER_BEARTIST_SUCCESS:
            return {state:action.payload} 
            case USER_BEARTIST_ERROR:
                return {state:action.paload}
        default:
            return state;
            
    }
}
