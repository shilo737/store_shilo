import { configureStore } from "@reduxjs/toolkit";
import  restaurantReducer from './features/restaurantSlice'
const myStore = configureStore({
    reducer:{
    restaurantReducer
    }
})
export default myStore