import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/store/slices/authSlice";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribe: false,
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/auth/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        subscribe: formData.subscribe,
      });

      if (response.data) {
        dispatch(setUser(response.data));
        navigate("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration"
      );
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h1 className="text-center text-2xl mb-8">CREATE ACCOUNT</h1>
      <p className="text-center mb-8">
        Please register below to create an account
      </p>
      <div className="max-w-[600px] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full p-3 border border-gray-300"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full p-3 border border-gray-300"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">
              Your Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-3 border border-gray-300"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">
              Your Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full p-3 border border-gray-300"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                id="subscribe"
                name="subscribe"
                type="checkbox"
                className="mr-2"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <span>Subscribe To Email Marketing</span>
            </label>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-[#004d3f] text-white py-3 px-4 hover:bg-[#003a30]"
          >
            Create An Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
