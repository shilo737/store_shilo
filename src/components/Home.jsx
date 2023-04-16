import React, { useEffect } from "react";
import StoreInput from "./StoreInput";
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import StoreItem from "./StoreItem";
import AddRestaurant from "./AddRestaurant";


const Home = () => {
const {stores} = useSelector((store)=>store.restaurantReducer)
console.log(stores);
const navigate = useNavigate()

// const [query] = useSearchParams()
// const store = (searchQ) =>{
//   const url = `http://localhost:5175//search?city=${searchQ}`
// }
// useEffect(()=>{
//   let searchQ = query.get("city")
//   store(searchQ)
// },[query])



return (
    <div className="container mx-auto ">
      <div className="h-[200px] bg-gradient-to-br from-sky-500 to-indigo-700 flex justify-center">
        <div className=" my-10">
          <p className=" text-3xl flex items-center text-gray-50">
            Find your table for any occasion
          </p>
          <div className=" my-3 ml-16 ">
            <StoreInput />
          </div>
          <div className=" flex justify-center mr-14">
          <Link to='/add'>
          <button  className="btn btn-success btn-xs text-white">Add Restaurant</button>
          </Link>
          </div>
          
        </div>
        
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 mt-10">
      {stores?.map((item, i) => (
        <div key={i}>
          <StoreItem item={item}/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;
