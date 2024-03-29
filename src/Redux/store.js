import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Cartreducer } from "./Reducer/CartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { albumListReducers, AlbumReducer, albumReducers, albumUserListReducers } from "./Reducer/AlbumReducer";
import { BeArtistReducer, GoogleAuthReducer, LoginReducer, RegisterReducer } from "./Reducer/UserReducer";
import { muisicDeleteReducers, muisicEditReducers, muisicListReducers, muisicReducers, musicUpdateReducer } from "./Reducer/MusicReducer";
import { liveDeleteReducers, liveEditReducers, liveListReducers, liveReducers, liveUpdateReducer } from "./Reducer/LiveShowReducer";
import { musicfileReducers, photoReducers } from "./Reducer/FileReducer";

const reducer   =combineReducers({
    cart:Cartreducer,
    album:AlbumReducer,
    register:RegisterReducer,
    loginUser :LoginReducer,
    role:BeArtistReducer,
    googleLogin:GoogleAuthReducer,
    //music
    addedMusicRed:muisicReducers,
    muiscList:muisicListReducers,
    muiscDeleted:muisicDeleteReducers,
    muiscEdit:muisicEditReducers,
    muiscUpdate:musicUpdateReducer,
    //album
    albumList:albumListReducers,
    addedAlbumRed:albumReducers,
    albumUserRed:albumUserListReducers,
    //liveShow
    addedLiveRed:liveReducers,
    liveList:liveListReducers,
    liveDeleted:liveDeleteReducers,
    liveEdit:liveEditReducers,
    liveUpdate:liveUpdateReducer,
    //liveShow
    photoAdd:photoReducers,
    musicfileAdd:musicfileReducers
    //
  


})

const userInfoFromLS=localStorage.getItem("userInfo") ?
 JSON.parse(localStorage.getItem("userInfo"))
 :null


  const googleInfoFromLS=localStorage.getItem("googleInfo") ?
 JSON.parse(localStorage.getItem("googleInfo"))
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
    googleLogin:{
        googleInfo:googleInfoFromLS
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