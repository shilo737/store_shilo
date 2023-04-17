import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStore } from "../redux/features/restaurantSlice";

const StoreItem = () => {
  const {restaurant} = useSelector((store)=>store.restaurantReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getStore())
  },[])


return (
<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 mt-10">
{restaurant?.map((item,i)=>(
<div key={i} className="">
<div className="card h-[400px] w-96  bg shadow-xl my-3 hover:bg-teal-700 hover:scale-105 hover:duration-700 font-serif">
        <figure>
          <img className=" w-full" src={item.main_image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>City : {item.city}</p>
          <p>Cuisine : {item.cuisine}</p>
          <div className="card-actions justify-end">
            <Link to={`/resId/${item.id}`}>
              <button className="btn btn-primary">More info</button>
            </Link>
          </div>
        </div>
      </div>
</div>
))}
    </div>
  );
};

export default StoreItem;
