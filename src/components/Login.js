// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    console.log(formData);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ marginTop: "80px" }} // ✅ Added margin to create space from header
    >
      <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4" style={{ fontWeight: "bold", fontSize: "24px" }}>
          Login
        </h2>

        <form onSubmit={handleSubmit} className="mt-3">
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          {/* Register Link */}
          <p className="mt-3 text-center">
            Not registered yet? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
