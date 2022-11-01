import { ALBUMUSER_LIST_FAIL, ALBUMUSER_LIST_REQUEST, ALBUMUSER_LIST_SUCCESS, ALBUM_ADD_FAIL, ALBUM_ADD_REQUEST, ALBUM_ADD_SUCCESS, ALBUM_CLEAR, ALBUM_GETALL, ALBUM_LIST_FAIL, ALBUM_LIST_REQUEST, ALBUM_LIST_SUCCESS, CLEAR_ALBUM, REMOVE_FROM_ALBUM } from "../Constants/AlbumConstants";

export const AlbumReducer  = (state={albumitems:[]},action)=>{

    
     switch (action.type) {
        case ALBUM_GETALL:
            const item =action.payload;
            // const exititem = state.albumitems.find(c=>c.name==item.name);                 
 
            // if (exititem) {
                return {
                    ...state,
                    albumitems: item
                    // state.albumitems.map((c) =>
                    //   c.name === exititem.name ? item : c
                    // )
                }
            //   }
            // else{
                // return {...state,albumitems:[...state.albumitems,item]}
            // }
            case REMOVE_FROM_ALBUM:
                return { ...state, albumitems: state.albumitems.filter(c => c.id !== action.payload) }
              case CLEAR_ALBUM:
                return { ...state, albumitems: state.albumitems = [] }
                default:
                return state;
            }
}


export const albumListReducers=(state={albums:[]},action)=>{
    switch (action.type) {
        case ALBUM_LIST_REQUEST:
            return {...state,loading:true}
        case ALBUM_LIST_SUCCESS:
            return {loading:false,albums:action.payload}
            case ALBUM_LIST_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}



export const albumReducers=(state={albumInfo:{}},action)=>{
    switch (action.type) {
        case ALBUM_ADD_REQUEST:
            return {loading:true}
        case ALBUM_ADD_SUCCESS:
            return {loading:false,albumInfo:action.payload}
            case ALBUM_ADD_FAIL:
                return {loading:false,error:action.payload}
            case ALBUM_CLEAR:
                return {}
        default:
            return state;
    }
}


export const albumUserListReducers=(state={albumuser:[]},action)=>{
    switch (action.type) {
        case ALBUMUSER_LIST_REQUEST:
            return {...state,loading:true}
        case ALBUMUSER_LIST_SUCCESS:
            return {loading:false,albumuser:action.payload}
            case ALBUMUSER_LIST_FAIL:
                return {loading:false,error:action.payload}
        default:
            return state;
    }
}