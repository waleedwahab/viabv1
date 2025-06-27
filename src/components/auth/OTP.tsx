"use client";

import { useState, useRef, ChangeEvent, FormEvent, KeyboardEvent } from "react";
import "./Otp.css";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const OtpPage = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/, ""); // Only digits
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    try {
      const otpToken = sessionStorage.getItem("otpToken");
      if (!otpToken) {
        alert("OTP token missing. Please signup again.");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/v1/users/verify-signup-user-otp",
        { otp: fullOtp },
        {
          headers: {
            "x-auth-otp": otpToken,
          },
        }
      );

      if (response.data.success) {
        alert("OTP verified successfully!");
        sessionStorage.removeItem("otpToken");
        sessionStorage.removeItem("otpEmail");
        router.push("/login");
      } else {
        alert("OTP verification failed.");
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      if (err.response) {
        alert(`Error: ${err.response.data?.message || "OTP verification failed."}`);
      } else {
        alert("Network/server error: " + err.message);
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
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between otp-inputs mb-3 w-100">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                id={`otp-${index}`}
                className="form-control text-center otp-input mx-1"
                maxLength={1}
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
              />
            ))}
          </div>
          <p className="text-center small">
            Didn&apos;t receive code? <span className="resend-link">Resend OTP</span>
          </p>
          <button type="submit" className="btn btn-color-otp w-75 pt-3 pb-3 mt-2">
            Verify and continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
