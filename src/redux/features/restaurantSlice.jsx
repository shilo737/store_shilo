import { createSlice } from "@reduxjs/toolkit";
import { restaurant } from "../data/stores";

const initialState = {
  restaurant,
};

const restaurantSlice = createSlice({
  name:'restaurant',
  initialState,
  reducers: {
    addStore: (state, action) => {
      const storeObj = action.payload;
      storeObj.id = Date.now();
      state.restaurant.push(storeObj);
      saveInLocalStorage(state.restaurant);
      console.log(restaurant);
    },
    getRestaurant: (state) => {
      const restaurant = localStorage.getItem('restaurant');
      state.restaurant = restaurant ? JSON.parse(restaurant) : [];
    },
    singleRestaurant: (state,action)=> {
      const id = action.payload;
      const restaurants =JSON.parse(localStorage.getItem('restaurant'));

      const filter = restaurants.find((restaurant)=>restaurant.id == id);
      state.singleRestaurant = filter;
      
    }





    
  },
});

const saveInLocalStorage = (restaurant) => {
  localStorage.setItem('restaurant', JSON.stringify(restaurant));
};

export const { addStore, getRestaurant,singleRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
