import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name:"search",
    initialState:{
        query:""
        ,activeTabs:"Images",
        loading:false,
    error:null},
        reducers:{
            setQuery:(state,action)=>{
                state.query=action.payload
            } ,
            SetActiveTabs:(state,action)=>{
                state.activeTabs=action.payload
            }, 
            setResults(state,action){
                state.results=action.payload
            },
            setLoading:(state,action)=>{
                state.loading=action.payload
                setError
            },
            setError:(state,action)=>{
                state.error=action.payload
                setLoading=false
            },clearResults:(state)=>{   
                state.results=[]
            }
        }


})

export const {setQuery,SetActiveTabs,setResults,setLoading,setError,clearResults}=SearchSlice.actions
export default SearchSlice.reducer;