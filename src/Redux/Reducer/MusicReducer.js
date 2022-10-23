import { MUSIC_ADD_FAIL, MUSIC_ADD_REQUEST, MUSIC_ADD_SUCCESS, MUSIC_CLEAR, MUSIC_DELETE_FAIL, MUSIC_DELETE_REQUEST, MUSIC_DELETE_SUCCESS, MUSIC_EDIT_FAIL, MUSIC_EDIT_REQUEST, MUSIC_EDIT_SUCCESS, MUSIC_LIST_FAIL, MUSIC_LIST_REQUEST, MUSIC_LIST_SUCCESS, MUSIC_UPDATE_FAIL, MUSIC_UPDATE_REQUEST, MUSIC_UPDATE_RESET, MUSIC_UPDATE_SUCCESS } from "../Constants/MusicConstans"

export const muisicReducers=(state={musicInfo:{}},action)=>{
    switch (action.type) {
        case MUSIC_ADD_REQUEST:
            return {loading:true}
        case MUSIC_ADD_SUCCESS:
            return {loading:false,musicInfo:action.payload}
            case MUSIC_ADD_FAIL:
                return {loading:false,error:action.payload}
            case MUSIC_CLEAR:
                return {}
        default:
            return state;
    }
}

export const muisicListReducers=(state={music:[]},action)=>{
    switch (action.type) {
        case MUSIC_LIST_REQUEST:
            return {loading:true}
        case MUSIC_LIST_SUCCESS:
            return {loading:false,music:action.payload}
            case MUSIC_LIST_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const muisicEditReducers=(state={music:{}},action)=>{
    switch (action.type) {
        case MUSIC_EDIT_REQUEST:
            return {...state,loading:true}
        case MUSIC_EDIT_SUCCESS:
            return {loading:false,music:action.payload}
            case MUSIC_EDIT_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const musicUpdateReducer=(state={music:{}},action)=>{
    switch (action.type) {
        case MUSIC_UPDATE_REQUEST:
            return {...state,loading:true}
        case MUSIC_UPDATE_SUCCESS:
            return {loading:false,success: true,music:action.payload}
        case MUSIC_UPDATE_RESET:
        return {course : {}}
        case MUSIC_UPDATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const muisicDeleteReducers=(state={music:{}},action)=>{
    switch (action.type) {
        case MUSIC_DELETE_REQUEST:
            return {loading:true}
        case MUSIC_DELETE_SUCCESS:
            return {loading:false,music:action.payload}
            case MUSIC_DELETE_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}