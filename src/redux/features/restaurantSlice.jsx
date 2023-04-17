import { createSlice } from "@reduxjs/toolkit";
import {restaurant} from '../data/stores'

const initialState={
  restaurant,
}

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    getStore:(state,action)=>{
      const restaurant = localStorage.getItem('restaurant')
      state.restaurant = restaurant ? JSON.parse(restaurant) : []
    },

    addStore:(state,action)=>{
      const storeObj = action.payload
      storeObj.id = Date.now()
      state.restaurant.push(storeObj)
      saveInLocalStorage(state.restaurant)
    },

    // storeInfo:(state,action)=>{
    //   state.stores = state.stores.filter(store => store.id !== action.payload)
    //   saveInLocalStorage(state.stores)
    // }

  },
});
const saveInLocalStorage = (restaurant) => {
    localStorage.setItem('restaurant',JSON.stringify(restaurant));
  }

export const {addStore, storeInfo , getStore} = restaurantSlice.actions 
export default restaurantSlice.reducer;
