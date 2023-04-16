import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StoreItem = ({item}) => {
  return (
    <div>
      <div className="card h-[400px] w-96  bg shadow-xl my-3 hover:bg-teal-700 hover:scale-105 hover:duration-700 font-serif">
        <figure>
          <img className=" w-full" src={item.main_image} alt="Shoes" />
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
  );
};

export default StoreItem;
