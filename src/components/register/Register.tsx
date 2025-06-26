"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import {signupValidationSchema } from "../../validations/SignupValidation"
import signup1 from "../../../public/assets/images/loginimage1.png";
import facebookicon from "../../../public/assets/icons/png/facebookicon.png";
import githubicon from "../../../public/assets/icons/png/githubicon.png";
import googleicon from "../../../public/assets/icons/png/googleicon.png";


import './Register.css';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

interface Errors {
  [key: string]: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError('');
    setSuccessMessage('');

    try {
      await signupValidationSchema .validate(formData, { abortEarly: false });
      setErrors({});

      const { fullName, email, password, role } = formData;
      const requestBody = { fullName, email, password, role };

      const response = await axios.post('http://localhost:3000/api/v1/users/registeruser', requestBody);
      const otpToken = response.data.data.token;

      if (otpToken) {
        sessionStorage.setItem("otpToken", otpToken);
        sessionStorage.setItem("otpEmail", email);
        setSuccessMessage(response.data.message || 'User registered successfully!');
        router.push('/otp');
      } else {
        setApiError('OTP token not received from server.');
      }
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        const formErrors: Errors = {};
        err.inner.forEach((error: any) => {
          formErrors[error.path] = error.message;
        });
        setErrors(formErrors);
      } else if (err.response?.data) {
        setApiError(err.response.data.message || 'Failed to register user');
      } else {
        setApiError(err.message || 'Something went wrong');
      }
    }
  };

  return (
    <div className='main-signup-div p-5 w-100'>
      <div className='container d-flex justify-content-between'>
        <div className='w-50'>
          <Image src={signup1} alt="Signup Visual" width={500} height={680} className="signup-image" />
        </div>
        <div className='w-50 '>
          <div className=" signup-form-container text-start pt-4 pb-3 ps-5 pe-5">
            <h2 className="signup-title">Signup</h2>
            <p className="signup-subtitle">Just some details to get you in</p>

            <form className="signup-form text-end" onSubmit={handleSubmit}>
              {apiError && <div className="alert alert-danger">{apiError}</div>}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}


              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  className="form-control signup-input"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control signup-input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control signup-input"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control signup-input"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
              </div>

              <button type="submit" className="btn btn-primary signup-button w-100 mt-3" >Signup</button>

              <div className='d-flex align-items-center justify-content-center mt-3'>
                <div className='border1 me-3'></div>
                <p className='mt-3'>Or</p>
                <div className='border2 ms-3'></div>
              </div>

              <div className="signup-socials mt-4 d-flex align-items-center justify-content-center gap-3 text-center">
                <Image src={googleicon} alt="Google" width={42} height={42} className='login-icons' />
                <Image src={facebookicon} alt="Facebook" width={42} height={42} className='login-icons' />
                <Image src={githubicon} alt="GitHub" width={42} height={42} className='login-icons' />
              </div>

              <p className="signup-login-link text-center mt-4 pb-3">
                Already Registered? <a href="/auth/login" className='href-hover'>Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
