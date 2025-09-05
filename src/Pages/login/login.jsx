import React from "react";
import { LoginImage, Logo } from "../../script/Images";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../schema/loginschema";
import supabase from "../../../supaBaseClient";



const LoginPage = () => {
const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (loginData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword(loginData);

      if(error){
        console.log(error,"err")
      }else{
      console.log(data,"err")
        navigate("/dashboard")
      }


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="flex shadow-2xl bg-white rounded-2xl h-[450px]">
        {/* images part */}

        <div className="w-[50%]">
          <img
            src={LoginImage}
            alt="Login Image"
            width={500}
            className="h-[450px]"
          />
        </div>

        {/* login form part */}

        <div className=" flex flex-col items-center justify-center bg-secondary font-medium w-[50%] p-8">
          <div className="">
            <img src={Logo} alt="Logo" className="h-16 rounded-xl" />
          </div>

          <div className="my-12 ">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* username part */}
              <div className="flex items-center space-x-3">
                <label className="w-16">Email</label>
                <div className="flex flex-col flex-1">
                  <input
                    placeholder="Username"
                    className="p-1 rounded-md border"
                    type="text"
                    {...register("email")}
                  />
                  <p className="min-h-3 text-xs text-red-500">
                    {errors.email?.message}
                  </p>
                </div>
              </div>

              {/* password part */}
              <div>
                <div className="flex items-center space-x-3">
                  <label className="w-16">Password</label>
                  <div className="flex flex-col flex-1">
                    <input
                      placeholder="Password"
                      className="p-1 rounded-md border"
                      type="password"
                      {...register("password")}
                    />
                    <p className="text-xs text-red-500">
                      {errors.password?.message}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary text-white p-1.5 px-2.5 rounded-2xl flex justify-self-center mt-8 hover:bg-primary-hover"
              >
                Login
              </button>
            </form>
          </div>

          <div className="flex items-center">
            <p className="text-xs pr-1 text-black">Don't have an account?</p>
            <Link
              className="font-semibold  cursor-pointer rounded-xl text-primary "
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
