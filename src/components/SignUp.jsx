import { useState } from "react";
import React from "react";
import { Form, useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import Login from "./Login";
import authService from "../SupabaseConf/authconf";
import { Link, useNavigate } from "react-router-dom";



function Signup() {
 

  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
    const navigate=useNavigate();
  const create = async (data) => {
    setError("");
    try {
      console.log(data);
      await authService.createAccount(data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleClick=()=>{
    return <Login/>
  }
  return (
    <div className="flex items-center justify-center py-8">
      <div
        className={`mx-auto w-full max-w-lg bg-indigo-200 rounded-xl p-10 border-black/10`}
      >
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create new Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          already have any account?&nbsp;
          <Link to={"/Login"}>
            Login
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="name:"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="password :"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" classname="w-full">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
