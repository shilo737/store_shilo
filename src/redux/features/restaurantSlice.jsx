import { createSlice } from "@reduxjs/toolkit";
import {stores} from '../data/stores'

const initialState={
    stores,
}

const restaurantSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addStore:(state,action)=>{
      const storeObj = action.payload
      storeObj.id = Date.now()
      console.log(storeObj);
      state.stores.push(storeObj)
      saveInLocalStorage(state.stores)
    },
    storeInfo:(state,action)=>{
      state.stores = state.stores.filter(store => store.id !== action.payload)
      saveInLocalStorage(state.stores)
    }

  },
});
const saveInLocalStorage = (store) => {
    localStorage.setItem('store', JSON.stringify(store));
  }

export const {addStore, storeInfo} = restaurantSlice.actions 
export default restaurantSlice.reducer;
