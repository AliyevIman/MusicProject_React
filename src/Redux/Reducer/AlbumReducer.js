import { ALBUM_GETALL, ALBUM_LIST_FAIL, ALBUM_LIST_REQUEST, ALBUM_LIST_SUCCESS } from "../Constants/AlbumConstants";

export const AlbumReducer  = (state={albumitems:[]},action)=>{

    
     switch (action.type) {
        case ALBUM_GETALL:
            const item =action.payload;
            const exititem = state.albumitems.find(c=>c.id==item.id);     
            if(exititem){
                return{
                ...state,
                albumitems: state.albumitems.map((c)=>
                c.id === exititem.id ? item:c
                )
                }
            }   
            else{
                return {...state,albumitems:[...state.albumitems,item]}
            }
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