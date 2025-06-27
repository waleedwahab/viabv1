"use client";
import { useState } from "react";
import "./NewPassword.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const NewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const route = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("Please fill out both fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const resetToken = sessionStorage.getItem("resetToken");

      if (!resetToken) {
        alert("Reset token missing. Please try again.");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/v1/users/reset-password",
        { password },
        {
          headers: {
            "x-auth-reset": resetToken,
          },
        }
      );

      if (response.data.success) {
        alert("Password reset successful!");
        sessionStorage.removeItem("resetToken");
        route.push("/login");
      } else {
        alert("Password reset failed.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "An error occurred. Please try again.");
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="otp-container d-flex justify-content-center align-items-center vh-100">
      <div className="otp-card shadow p-4 rounded p-5">
        <h5 className="text-center mb-3">Create New Password</h5>
        <p className="text-center small">Enter and confirm your new password.</p>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center"
        >
          <input
            type="password"
            className="form-control mb-3 otp-input"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3 otp-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-color-otp mt-2"
          >
            Save New Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordPage;
