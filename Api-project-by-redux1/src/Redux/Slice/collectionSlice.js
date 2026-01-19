import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],

  lastAction: null, // ✅ REQUIRED
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      // const alreadyExists = state.items.find( //✔️ poora object return karta hai thoda heavy (object nikalta hai)
      const alreadyExists = state.items.some(
        //fast “bas ye check karna hai ki item already hai ya nahi”
        (item) => item.id === action.payload.id,
      );
      if (alreadyExists) {
        state.lastAction = "EXISTS";
        state.lastItemType = action.payload.type; // ✅

        return;
      }
      state.items.push(action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
      state.lastAction = "ADDED";
       state.lastItemType = action.payload.type; // ✅
    },
    resetLastAction: (state) => {
      state.lastAction = null;
       state.lastItemType = null; // ✅ reset
    },
    removeCollection: (state, action) => {
              const { id, type } = action.payload;

    //   state.items = state.items.filter((item) => item.id !== action.payload);
          state.items = state.items.filter(item => item.id !== id);

      localStorage.setItem("collection", JSON.stringify(state.items));
       state.lastAction = "REMOVED";
      state.lastItemType = type;
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
  },
});

export const {
  addCollection,
  clearCollection,
  removeCollection,
  resetLastAction,
} = collectionSlice.actions;
export default collectionSlice.reducer;
