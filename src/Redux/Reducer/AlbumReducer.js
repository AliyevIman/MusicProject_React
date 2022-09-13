import { ALBUM_GETALL } from "../Constants/AlbumConstants";

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