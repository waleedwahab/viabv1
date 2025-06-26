"use client";
import { useState } from "react";
import "./Otp.css"
import axios from "axios";
import { useRouter } from "next/navigation";

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const route = useRouter();
  const handleChange = (e:any, index:any) => {
    const value = e.target.value.replace(/\D/, ""); // Allow only digits
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleKeyDown = (e:any, index:any) => {};

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    try {
      const otpToken = sessionStorage.getItem("otpToken");

      if (!otpToken) {
        alert("OTP token missing. Please signup again.");
        return;
      }

      const config = {
        headers: {
          "x-auth-otp": otpToken,
        },
      };

      const data = {
        otp: fullOtp,
      };

      const response = await axios.post(
        "http://localhost:3000/api/v1/users/verify-signup-user-otp",
        data,
        config
      );

      if (response.data.success) {
        alert("OTP verified successfully!");
        sessionStorage.removeItem("otpToken"); // optional cleanup
        sessionStorage.removeItem("otpEmail"); // optional
        route.push("/login"); // Navigate to home page
      } else {
        alert("OTP verification failed.");
      }
    } catch (error: any) {
      if (error.response) {
        alert(
          `Error: ${error.response.data.message || "OTP verification failed."}`
        );
      } else {
        alert("Network/server error: " + error.message);
      }
    }
  };

  return (
    <div className="otp-container d-flex justify-content-center align-items-center vh-100">
      <div className="otp-card shadow p-4 rounded p-5">
        <h5 className="text-center mb-3">Enter OTP</h5>
        <p className="text-center small">
          We have sent an OTP to your mobile number / Email
        </p>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center"
        >
          <div className="d-flex justify-content-between otp-inputs mb-3 w-100">
            {otp.map((data, index) => (
              <input
                type="text"
                id={`otp-${index}`}
                className="form-control text-center otp-input mx-1"
                maxLength={1}
                key={index}
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <p className="text-center small">
            Didn't receive code? <span className="resend-link">Resend OTP</span>
          </p>
          <button
            type="submit"
            className="btn btn-color-otp w-75 pt-3 pb-3 mt-2"
          >
            Verify and continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
