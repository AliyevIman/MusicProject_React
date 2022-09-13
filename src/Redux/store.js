import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Cartreducer } from "./Reducer/CartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { AlbumReducer } from "./Reducer/AlbumReducer";

const reducer   =combineReducers({
    cart:Cartreducer,
    album:AlbumReducer
})
// const userInfoFromLS=localStorage.getItem("userInfo") ?
//  JSON.parse(localStorage.getItem("userInfo"))
//  :null
const cartItemsFromLocal = localStorage.getItem("cartitems" )?
JSON.parse(localStorage.getItem("cartitems")):[] 
const initialState={
    // loginUser:{
    //     userInfo:userInfoFromLS
    // },
    cart:{
        cartitems:cartItemsFromLocal
    }
}
const middleware = [thunk];
const store=createStore(
    reducer,
    initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store;