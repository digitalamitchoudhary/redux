import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Slice/Search.jsx"; 
const store  = configureStore({
    reducer:{
        search:searchReducer,
    }
})
export default store;   