// src/components/Register.js
import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registered Successfully!");
    console.log(formData);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ marginTop: "80px" }} // ✅ Added margin to create space from header
    >
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "12px" }}>
        <h3 className="text-center mb-4" style={{ fontWeight: "bold", fontSize: "24px" }}>
          Register
        </h3>

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

          {/* Mobile Number */}
          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
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

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreedToTerms"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="agreedToTerms">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
