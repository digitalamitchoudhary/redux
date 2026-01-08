import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
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
            setActiveTabs:(state,action)=>{
                state.activeTabs=action.payload
            }, 
            setResults(state,action){
                state.results=action.payload
            },
            setLoading:(state,action)=>{
                state.loading=action.payload
                state.error = null

            },
            setError:(state,action)=>{
                state.error=action.payload
                state.loading = false
            },clearResults:(state)=>{   
                state.results=[]
            }
        }


})

export const {setQuery,setActiveTabs,setResults,setLoading,setError,clearResults}=searchSlice.actions
export default searchSlice.reducer;