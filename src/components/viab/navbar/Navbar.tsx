"use client";
import Image from "next/image";
import Link from "next/link";

import {usePathname } from 'next/navigation';

// import profilePic from './assets/profile.jpg'; // Replace with your own image
import { FaSearch, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const logOutt = () => {
    console.log("in logout");
  };
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-3 pt-3 pb-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="#">
          ◆ VIAB
        </Link>

        <button
          onClick={logOutt}
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
         <Link
  href="/viab/home"
  className={`nav-link ${pathname === "/viab/home" ? "active" : ""}`}
>
  Home
</Link>

            </li>
            <li className="nav-item">
                    <Link
  href="/viab/drawings"
  className={`nav-link ${pathname === "/viab/drawings" ? "active" : ""}`}
>
  Generate Drawings
</Link>
            </li>
            <li className="nav-item">
                   <Link
  href="/viab/design"
  className={`nav-link ${pathname === "/viab/design" ? "active" : ""}`}
>
  Design
</Link>
            </li>
            <li className="nav-item">
                   <Link
  href="/viab/orderhistory"
  className={`nav-link ${pathname === "/viab/orderhistory" ? "active" : ""}`}
>
  Order History
</Link>
            </li>
            <li className="nav-item">
                    <Link
  href="/viab/insurance"
  className={`nav-link ${pathname === "/viab/insurance" ? "active" : ""}`}
>
  Insurance
</Link>

            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
            <div className="search-box d-flex align-items-center px-2">
              <FaSearch className="me-2 text-muted" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <button className="btn btn-light icon-btn">
              <FaEnvelope />
            </button>
            <Image
              width={100}
              height={100}
              src="/assets/images/loginperson.png"
              alt="Profile"
              className="profile-pic"
              onClick={logOutt}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
