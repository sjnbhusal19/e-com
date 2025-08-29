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
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <div className="flex shadow-2xl bg-white rounded-md ">
        {/* images part */}

        <div className="w-[50%]">
          <img
            src={LoginImage}
            alt="Login Image"
            width={600}
            className="h-[450px]"
          />
        </div>

        {/* login form part */}

        <div className=" flex flex-col items-center justify-center bg-blue-200 text-blue-800 font-semibold w-[50%]">
          <div className="">
            <img src={Logo} alt="Logo" className="h-16 rounded-xl" />
          </div>

          <div className="my-12 ">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-x-3 -2.5">
                <label>Username</label>
                <input
                  placeholder="Username"
                  className="p-1 rounded-md"
                  type="text"
                  {...register("username")}
                />
              </div>

              <div className="space-x-3 ">
                <label>Password</label>
                <input
                  placeholder="Password"
                  className="p-1 rounded-md"
                  type="password"
                  {...register("password")}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white p-1.5 px-2.5 rounded-md flex justify-self-center mt-8 hover:bg-blue-800 "
              >
                Login
              </button>
            </form>
          </div>

          <div className="flex items-center gap-2">
            <p>Don't have account?</p>
            <Link
              className="font-semibold  cursor-pointer bg-blue-600 p-1  rounded-xl text-white "
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
