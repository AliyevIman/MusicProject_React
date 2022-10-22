import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Cartreducer } from "./Reducer/CartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { AlbumReducer } from "./Reducer/AlbumReducer";
import { BeArtistReducer, LoginReducer, RegisterReducer } from "./Reducer/UserReducer";

const reducer   =combineReducers({
    cart:Cartreducer,
    album:AlbumReducer,
    register:RegisterReducer,
    loginUser :LoginReducer,
    role:BeArtistReducer
})
const userInfoFromLS=localStorage.getItem("userInfo") ?
 JSON.parse(localStorage.getItem("userInfo"))
 :null
const cartItemsFromLocal = localStorage.getItem("cartitems" )?
JSON.parse(localStorage.getItem("cartitems")):[] 

//  const roleInfoFromLS=localStorage.getItem("roleInfo") ?
//  JSON.parse(localStorage.getItem("roleInfo"))
//  :null


const albumItemsFromLocal = localStorage.getItem("albumitems" )?
JSON.parse(localStorage.getItem("albumitems")):[] 

const initialState={
    loginUser:{
        userInfo:userInfoFromLS
    },
      album:{
        albumitems:albumItemsFromLocal
    },
    cart:{
        cartitems:cartItemsFromLocal
    }
    // role:{
    //     roleInfo:roleInfoFromLS
    // }
}
const middleware = [thunk];
const store=createStore(
    reducer,
    initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store;