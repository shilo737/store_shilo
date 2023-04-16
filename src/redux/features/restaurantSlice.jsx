import { createSlice } from "@reduxjs/toolkit";
import {stores} from '../data/stores'

const initialState={
    stores,
}

const restaurantSlice = createSlice({
  name: "store",
  initialState,
  reducers: {

  },
});
const saveInLocalStorage = (store) => {
    localStorage.setItem('store', JSON.stringify(store));
  }
export default restaurantSlice.reducer;
