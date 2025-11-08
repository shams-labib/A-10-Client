import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase content/Auth/AuthContext";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [tc, setTc] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(name, email, photo, password);
    createUser(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (!name || !email) {
      Swal.fire({
        icon: "error",
        title: "Please fill out all fields",
      });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password!",
        text: "Password must contain at least one uppercase, one lowercase, and be at least 6 characters long.",
      });
      return;
    }

    if (!tc) {
      Swal.fire({
        icon: "error",
        title: "You must agree to the Terms & Conditions ⚠️",
      });
      return;
    }
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-base-100">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {" "}
          Register{" "}
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              {" "}
              Full Name{" "}
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              {" "}
              Photo URL{" "}
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              {" "}
              Email Address{" "}
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              {" "}
              Password{" "}
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-xl text-gray-600 dark:text-gray-300 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <LuEyeClosed />}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={tc}
              onChange={(e) => setTc(e.target.checked)}
              className="w-4 h-4 text-pink-500 border-gray-300 dark:border-gray-600 rounded focus:ring-pink-400"
            />
            <label className="text-sm text-gray-600 dark:text-gray-300">
              I agree to the{" "}
              <a
                href="#"
                className="underline text-pink-600 dark:text-pink-400"
              >
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-md text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
          >
            Register 🚀
          </button>

          <div className="flex items-center w-full gap-2">
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></span>
            <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">
              OR
            </span>
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></span>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 font-bold w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle size={25} /> Continue with Google
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              className="text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
              to={"/login"}
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
