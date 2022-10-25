import { LIVESHOW_ADD_FAIL, LIVESHOW_ADD_REQUEST, LIVESHOW_ADD_SUCCESS, LIVESHOW_CLEAR, LIVESHOW_DELETE_FAIL, LIVESHOW_DELETE_REQUEST, LIVESHOW_DELETE_SUCCESS, LIVESHOW_EDIT_FAIL, LIVESHOW_EDIT_REQUEST, LIVESHOW_EDIT_SUCCESS, LIVESHOW_LIST_FAIL, LIVESHOW_LIST_REQUEST, LIVESHOW_LIST_SUCCESS, LIVESHOW_UPDATE_FAIL, LIVESHOW_UPDATE_REQUEST, LIVESHOW_UPDATE_RESET, LIVESHOW_UPDATE_SUCCESS } from "../Constants/LiveShowConstants"

export const liveReducers=(state={liveInfo:{}},action)=>{
    switch (action.type) {
        case LIVESHOW_ADD_REQUEST:
            return {loading:true}
        case LIVESHOW_ADD_SUCCESS:
            return {loading:false,liveInfo:action.payload}
            case LIVESHOW_ADD_FAIL:
                return {loading:false,error:action.payload}
            case LIVESHOW_CLEAR:
                return {}
        default:
            return state;
    }
}

export const liveListReducers=(state={live:[]},action)=>{
    switch (action.type) {
        case LIVESHOW_LIST_REQUEST:
            return {loading:true}
        case LIVESHOW_LIST_SUCCESS:
            return {loading:false,live:action.payload}
            case LIVESHOW_LIST_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const liveEditReducers=(state={live:{}},action)=>{
    switch (action.type) {
        case LIVESHOW_EDIT_REQUEST:
            return {...state,loading:true}
        case LIVESHOW_EDIT_SUCCESS:
            return {loading:false,live:action.payload}
            case LIVESHOW_EDIT_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const liveUpdateReducer=(state={live:{}},action)=>{
    switch (action.type) {
        case LIVESHOW_UPDATE_REQUEST:
            return {...state,loading:true}
        case LIVESHOW_UPDATE_SUCCESS:
            return {loading:false,success: true,live:action.payload}
        case LIVESHOW_UPDATE_RESET:
        return {course : {}}
        case LIVESHOW_UPDATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}
export const liveDeleteReducers=(state={live:{}},action)=>{
    switch (action.type) {
        case LIVESHOW_DELETE_REQUEST:
            return {loading:true}
        case LIVESHOW_DELETE_SUCCESS:
            return {loading:false,live:action.payload}
            case LIVESHOW_DELETE_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}