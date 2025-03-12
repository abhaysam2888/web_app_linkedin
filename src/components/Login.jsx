import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="top-5 left-5 absolute font-bold text-blue-600 text-2xl sm:text-3xl">
        Linked<span className="bg-blue-600 px-1 text-white">in</span>
      </div>
      <div className="bg-gray-700 shadow-lg mt-16 p-6 sm:p-8 rounded-lg w-full max-w-md">
        <h2 className="mb-4 font-semibold dark:text-gray-200 text-xl sm:text-2xl">
          Sign in
        </h2>
        <div className="mb-4">
          <label className="block text-gray-200">Email or phone</label>
          <input
            type="email"
            placeholder="Email or phone"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none w-full dark:placeholder:text-gray-500 dark:text-black"
          />
        </div>
        <div className="relative mb-4">
          <label className="block text-gray-200">Password</label>
          <input
            type="password"
            placeholder="password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none w-full dark:placeholder:text-gray-500 dark:text-black"
          />
        </div>
        <p className="mt-2 text-blue-600 text-sm cursor-pointer">
          Forgot password?
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 mt-4 p-3 rounded-lg w-full font-semibold text-white">
          Sign in
        </button>
      </div>
      <p className="mt-4 text-gray-600 text-sm sm:text-base">
        New to LinkedIn?{" "}
        <span className="text-blue-600 cursor-pointer">Join now</span>
      </p>
      <footer className="bottom-4 absolute w-full text-gray-500 text-xs sm:text-sm text-center">
        LinkedIn © 2025 User Agreement Privacy Policy Cookie Policy
      </footer>
    </div>
  );
};

export default Login;
