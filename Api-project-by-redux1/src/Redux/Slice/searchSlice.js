import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        activeTabs: "Images",
        results: [],
        loading: false,
        error: null,
        
  cache: {
    Images: {},
    Videos: {},
    Gifs: {}
  }
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setActiveTabs: (state, action) => {
            state.activeTabs = action.payload
        },
        setResults(state, action) {
        //     state.results = action.payload
        //    state.loading = false

         const { tab, query, data } = action.payload;

         state.results = data;
         state.loading = false;

        // ✅ CACHE SAVE (MOST IMPORTANT)
         state.cache[tab][query] = data;

        },
        setLoading: (state) => {
            state.loading = true
            state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        }, clearResults: (state) => {
            state.results = []
        }
    }


})

export const { setQuery, setActiveTabs, setResults, setLoading, setError, clearResults } = searchSlice.actions
export default searchSlice.reducer;