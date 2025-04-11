import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/index";
import { useDispatch } from "react-redux";
import { setUser, setError } from "@/store/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );

      // Store token and user info
      sessionStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to the intended page or products page
      const from = location.state?.from?.pathname || "/products";
      navigate(from, { replace: true });
    } catch (error) {
      let message = "An error occurred during login.";

      switch (error.code) {
        case "auth/invalid-credential":
          message = "Invalid email or password.";
          break;
        case "auth/user-not-found":
          message = "No account found with this email.";
          break;
        case "auth/wrong-password":
          message = "Incorrect password.";
          break;
        case "auth/too-many-requests":
          message = "Too many failed attempts. Please try again later.";
          break;
        default:
          message = error.message;
      }

      setErrorMessage(message);
      dispatch(setError(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded shadow-xl w-full max-w-md space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">Login</h2>

        {errorMessage && (
          <div
            className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-[#004d3f] hover:bg-[#003a30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d3f] transition duration-150 ease-in-out"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            Forgot your password?
          </a>
        </div>

        <div>
          <Link to="/register">
            <button
              type="button"
              className="w-full py-2.5 px-4 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out"
            >
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
