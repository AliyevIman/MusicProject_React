import { MUSICFILE_ADD_FAIL, MUSICFILE_ADD_REQUEST, MUSICFILE_ADD_SUCCESS, PHOTO_ADD_FAIL, PHOTO_ADD_REQUEST, PHOTO_ADD_SUCCESS } from "../Constants/FileConstants"

export const photoReducers=(state={photoInfo:{}},action)=>{
    switch (action.type) {
        case PHOTO_ADD_REQUEST:
            return {loading:true}
        case PHOTO_ADD_SUCCESS:
            return {loading:false,photoInfo:action.payload}
            case PHOTO_ADD_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const musicfileReducers=(state={musicfileInfo:{}},action)=>{
    switch (action.type) {
        case MUSICFILE_ADD_REQUEST:
            return {loading:true}
        case MUSICFILE_ADD_SUCCESS:
            return {loading:false,musicfileInfo:action.payload}
            case MUSICFILE_ADD_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}