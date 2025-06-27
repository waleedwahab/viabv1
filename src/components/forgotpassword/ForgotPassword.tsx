"use client";
import { useState,FormEvent  } from "react";
import "./ForgotPassword.css"
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert(`Reset link sent to: ${email}`);
};

  return (
  
    <div className="forgot-password-bg d-flex justify-content-center align-items-center ">
      <div className="forgot-box  fadeInUp p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="dot me-2"></div>
          <span className="viab-label">VIAB</span>
        </div>
        <h5 className="text-center mb-2 fw-bold">Forgot Password?</h5>
        <p className="text-center text-muted mb-1 small">
          Enter your Email address and we&apos;ll send a link to reset password
        </p>
        <form onSubmit={handleSubmit} className="text-start">
          <label className="text-start ms-5 p-3 mb-0 em-label">Email</label>
          <div className="d-flex flex-column  mt-0 pt-0 align-items-center">
            <input
              type="email"
              className="form-control email-input text-start mb-4 w-75"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-center mb-4">
            <button type="submit" className="btn custom-btnn pt-2 pb-2">
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  
  );
};

export default ForgotPassword;
