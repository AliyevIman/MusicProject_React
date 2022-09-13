import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../Constants/CartConstant";

export const AddToCart=(id,qyt)=>async(dispatch,getState)=>{
    const {data } =await axios.get(`${BASE_URL}api/LiveShows/${id}`);
    const ticket = {
        id :data.id,
       name :data.name,
       price : data.price,
       discount :data.discount,
       photo:data.photo,
       quantity:qyt

    }
    
    dispatch({
        type:ADD_TO_CART,
        payload:ticket
    })
    localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems))
}
export const RemoveCart = (id) => (dispatch,getState) => {
    dispatch({              
        type: REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems))
}

export const ClearAll = () => (dispatch,getState) => {
    dispatch({
        type: CLEAR_CART
    })
    localStorage.setItem("cartitems", JSON.stringify(getState().cart.cartitems))
}