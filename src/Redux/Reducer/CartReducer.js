import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../Constants/CartConstant";

export const Cartreducer  = (state={cartitems:[]},action)=>{
switch (action.type) {
    case ADD_TO_CART:
        const item =action.payload;
        const exititem = state.cartitems.find(c=>c.id==item.id);                 
        if(exititem){
          return{
            ...state,
            cartitems: state.cartitems.map((c)=>
            c.id === exititem.id ? item:c
            )
          }
        }
        else{
            return {...state,cartitems:[...state.cartitems,item]}
        }
        case REMOVE_FROM_CART:
        return {...state,cartitems:state.cartitems.filter(c=>c.id!==action.payload)}
         case CLEAR_CART:
           return {...state,cartitems:state.cartitems=[]}  
    default:
        return state;
}
}