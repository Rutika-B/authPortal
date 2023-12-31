import { useState } from "react";
import React from "react";
import { Form, useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import authService from "../SupabaseConf/authconf";
import {sha256} from "crypto-hash";

function Login() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const login = async (data) => {
    setError("");
    try {
      
      data.password=await sha256(data.password);
      const flag=await authService.loginToact(data);
      if (flag) {
        throw flag;
      }
      else
      {

        navigate("/");
      }
    
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center m-4">
      <div
        className={`mx-auto w-full max-w-lg bg-indigo-200 rounded-xl p-10 border-black/10`}
      >
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/SignUp"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <div className="space-y-5">
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
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
