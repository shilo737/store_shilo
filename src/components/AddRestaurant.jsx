import React from "react";
import { useForm } from 'react-hook-form';
import {addStore} from '../redux/features/restaurantSlice'
import { useDispatch, useSelector } from "react-redux";
const AddRestaurant = () => {
const dispatch = useDispatch()

const {register , handleSubmit,reset,formState:{errors}} = useForm();
const Alphabet = /^[a-zA-Z\s]+$/;
const onSub = (data) => {
dispatch(addStore(data))
console.log(data);
}
 
  return (
 <div className="h-screen bg-gradient-to-br from-pink-300 to-indigo-700 flex justify-center items-center w-full">
  <form onSubmit={handleSubmit(onSub)}>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Restaurant</h1>
        <div className="">
          <label className="block mb-1 text-gray-600 font-semibold">img</label>
          <input {...register('main_image',
          {
            require:{value:true,message:'img required...'}
          }
          )} type="url" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
          {errors.main_image && <p className=' text-red-500'>{errors.main_image.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-gray-600 font-semibold">Name Restaurant</label>
          <input {...register('name',
          {
          required:{value:true,message:'Name Restaurant required...'},
          maxLength:{value:20,message:'Name Restaurant max 20 chars...'},
          minLength:{value:2,message:'Name Restaurant min 2 chars...'},
          pattern:{value:Alphabet,message:'Name Restaurant is not alphabet...'}
        })} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        {errors.name && <p className=' text-red-500'>{errors.name.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-gray-600 font-semibold">City</label>
          <input {...register('city',
          {
          required:{value:true,message:'city required...'},
          maxLength:{value:20,message:'city max 20 chars...'},
          minLength:{value:2,message:'city min 2 chars...'},
          pattern:{value:Alphabet,message:'city is not alphabet...'}
        })} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        {errors.city && <p className=' text-red-500'>{errors.city.message}</p>}
        </div>
        <div>
          <label className="block mb-1 text-gray-600 font-semibold">Cuisine</label>
          <input {...register('cuisine',
          {
          required:{value:true,message:'cuisine required...'},
          maxLength:{value:20,message:'cuisine max 20 chars...'},
          minLength:{value:2,message:'cuisine min 2 chars...'},
          pattern:{value:Alphabet,message:'cuisine is not alphabet...'}
        })} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        {errors.cuisine && <p className=' text-red-500'>{errors.cuisine.message}</p>}
        </div>
        
      </div>
      <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
      <button onClick={()=>reset()} className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Reset</button>
    </div>
  </form>
</div>
    
  );
};

export default AddRestaurant;
