import React from "react";
import { LoginImage, Logo } from "../../script/Images";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../schema/loginschema";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="flex shadow-2xl bg-white rounded-2xl ">
        {/* images part */}

        <div className="w-[50%]">
          <img
            src={LoginImage}
            alt="Login Image"
            width={500}
            className="h-[420px]"
          />
        </div>

        {/* login form part */}

        <div className=" flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-blue-900 font-medium w-[50%] p-8">
          <div className="">
            <img src={Logo} alt="Logo" className="h-16 rounded-xl" />
          </div>

          <div className="my-12 ">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-x-3 -2.5">
                <label>Username</label>
                <input
                  placeholder="Username"
                  className="p-1 rounded-md border"
                  type="text"
                  {...register("username")}
                />
                <p className="text-sm text-red-400">{errors.username?.message}</p>
              </div>

              <div className="space-x-3 ">
                <label>Password</label>
                <input
                  placeholder="Password"
                  className="p-1 rounded-md border ml-1.5"
                  type="password"
                  {...register("password")}
                />
                <p className="text-sm text-red-400">{errors.password?.message}</p>
              </div>

              <button
                type="submit"
                className="bg-black text-white p-1.5 px-2.5 rounded-2xl flex justify-self-center mt-8 hover:bg-blue-800"
              >
                Login
              </button>
            </form>
          </div>

          <div className="flex items-center">
            <p className="text-xs text-black">Don't have an account?</p>
            <Link
              className="font-semibold  cursor-pointer rounded-xl text-green-600 "
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
