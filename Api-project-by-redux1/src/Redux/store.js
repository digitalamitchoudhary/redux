import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Slice/searchSlice.js"; 
import collectionReducer from "./Slice/collectionSlice.js";
const store  = configureStore({
    reducer:{
        search:searchReducer,
        collection: collectionReducer
    }
})
export default store;   