import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const StoreInput = () => {
const inputRef = useRef()
const navigate = useNavigate()
const onClicks = () => {
    let input_val = inputRef.current.value;
    navigate(`/?s=${input_val}`);
  };
return (
    <div>
      <div className="form-control ">
        <div className="input-group">
          <input
          onKeyDown={(e) => {
            if (e.key == "Enter") onClicks();
            }}
            ref={inputRef}
            type="text"
            placeholder="Search…"
            className="input input-bordered bg-gradient-to-br from-sky-800 to-indigo-700"
          />
          <button onClick={() => onClicks()} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default StoreInput;
