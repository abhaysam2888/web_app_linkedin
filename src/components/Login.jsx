import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-0 min-h-screen">
      <div className="top-5 left-5 absolute font-bold text-blue-600 text-2xl sm:text-3xl">
        Linked<span className="bg-blue-600 px-1 text-white">in</span>
      </div>
      <h1 className="mb-4 font-semibold text-gray-800 text-2xl md:text-3xl text-center dark:text-gray-200">
        Make the most of your professional life
      </h1>
      <div className="bg-white shadow-lg p-6 md:p-8 rounded-lg w-full max-w-[455px]">
        <label className="block text-gray-700">Email or phone number</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 p-2 border border-gray-300 rounded w-full dark:placeholder:text-gray-500"
        />

        <label className="block text-gray-700">Password</label>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3 p-2 border border-gray-300 rounded w-full dark:placeholder:text-gray-500"
          />
        </div>

        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={keepLoggedIn}
            onChange={() => setKeepLoggedIn(!keepLoggedIn)}
            className="mr-2"
          />
          <label className="text-gray-700">Keep me logged in</label>
        </div>
        <p className="text-gray-500 text-sm">
          By clicking Agree & Join or Continue, you agree to the Linkedin
        </p>
        <p className="mb-3 text-gray-500 text-sm sm:text-center text-start">
          <a className="font-semibold text-blue-600" href="">
            User Agreement,{" "}
          </a>
          <a className="font-semibold text-blue-600" href="">
            Privacy Policy,{" "}
          </a>
          and{" "}
          <a className="font-semibold text-blue-600" href="">
            Cookie Policy.
          </a>
        </p>
        <button className="bg-blue-600 py-2 rounded-3xl w-full font-semibold text-white">
          Agree & Join
        </button>
        <div className="my-4 text-gray-500 text-center">or</div>
        <p className="mt-4 text-center dark:text-gray-700">
          Already on LinkedIn?{" "}
          <a href="#" className="font-semibold text-blue-600">
            Sign in
          </a>
        </p>
      </div>
      <p className="mt-4 text-sm text-center">
        Looking to create a page for a business?{" "}
        <a className="font-semibold text-blue-600" href="">
          Get Help
        </a>
      </p>
    </div>
  );
};

export default Login;
