import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../schema/registerScheme";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = (data) => console.log(data);
  
  return (
    <div className='flex items-center justify-center h-screen bg-slate-300'>
      <form className='bg-white shadow-md rounded-2xl p-10' onSubmit={handleSubmit(onSubmit)}>
        <div className='font-bold flex justify-center text-blue-800 mb-6'>
          <h1>New User Registration:</h1>
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 mb-1'>First Name:</label>
          <input 
            className={`border rounded w-full py-2 px-3`} 
            type="text" 
            placeholder='Enter your first name'
            {...register("firstname")} 
          />

         <p className="text-sm text-red-400">{errors.firstname?.message}</p>

          
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 mb-1'>Last Name:</label>
          <input 
            className={`border rounded w-full py-2 px-3 `} 
            type="text" 
            placeholder='Enter your last name'
            {...register("lastname")} 
          />
         
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 mb-1'>Email:</label>
          <input 
            className={`border rounded w-full py-2 px-3 `} 
            type="email" 
            placeholder='Enter your email'
            {...register("email")}
          />
          
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 mb-1'>Password:</label>
          <input 
            className={`border rounded w-full py-2 px-3 `} 
            type="password" 
            placeholder='Enter your password'
            {...register("password")}
          />
          
        </div>

        <div className='mb-6'>
          <label className='block text-gray-700 mb-1'>Confirm Password:</label>
          <input 
            className={`border rounded w-full py-2 px-3 `} 
            type="password" 
            placeholder='Confirm your password'
            {...register("confirmPassword")}
          />
          
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-800 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;