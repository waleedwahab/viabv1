"use client";

import React, { useState , useRef, useEffect } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import  "./insurance.css";

const Insurance = () => {
  const [deductible, setDeductible] = useState(500);
  const [duration, setDuration] = useState(12);
  const [coverage, setCoverage] = useState(100000);
  const tabOptions = ["Best Fit", "Top Rated", "Cost Effective"];
   const [selectedTab, setSelectedTab] = useState("Best Fit");
 const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [underlineStyle, setUnderlineStyle] = useState({});
    useEffect(() => {
    const currentTab = tabRefs.current[selectedTab];
    if (currentTab) {
      setUnderlineStyle({
        width: `${currentTab.offsetWidth}px`,
        left: `${currentTab.offsetLeft}px`
      });
    }
  }, [selectedTab]);

  return (
    <div className="container-fluid  insuranceSection py-4 pb-5">
      <div className="container py-4 px-4 second-layer ">
        <h2 className="fw-bold">Insurance Plans</h2>
        <p>
          Explore and compare insurance plans tailored for your construction and
          furniture needs.
        </p>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <select className="form-select w-auto">
            <option>Insurance Type</option>
          </select>
          <select className="form-select w-auto">
            <option>Coverage Level</option>
          </select>
          <select className="form-select w-auto">
            <option>Provider</option>
          </select>
          <select className="form-select w-auto">
            <option>Price</option>
          </select>
        </div>

       <div className="mb-4">
      <h5 className="fw-semibold">AI-Powered Plan Comparison</h5>
      <div className="d-flex justify-content-start ms-0 text-start gap-5 role-tabs position-relative">
        {tabOptions.map((tab) => (
          <div
            key={tab}
            className={`tab-item ${selectedTab === tab ? "selected" : ""}`}
            onClick={() => setSelectedTab(tab)}
            
           ref={(el) => {
  tabRefs.current[tab] = el as HTMLDivElement | null;
}}

          >
            {tab}
          </div>
        ))}
        <div className="tab-underline" style={underlineStyle}></div>
      </div>
    </div>

        {[
          {
            title: "Comprehensive Coverage",
            desc:
              "Covers all aspects of construction and furniture, including damage, theft, and natural disasters.",
            img: "/assets/images/insurance1.png"
          },
          {
            title: "Standard Coverage",
            desc:
              "Offers balanced protection for construction and furniture, with moderate coverage limits.",
            img: "/assets/images/insurance2.png"
          },
          {
            title: "Basic Coverage",
            desc:
              "Provides essential coverage for construction and furniture, focusing on major risks.",
            img: "/assets/images/insurance3.png"
          }
        ].map((plan, index) => (
          <div
            className="d-flex align-items-start justify-content-between  layer3  gap-5 pt-3 pb-3 ps-4 pe-4 mb-3 bg-light"
            key={index}
          >
            <div>
              <h6 className="fw-semibold mb-1  mt-2">{plan.title}</h6>
              <p className="mb-0">{plan.desc}</p>
              <button className="btn btn-outline-dark  select-plan-btn mt-4">Select Plan</button>
            </div>
            <Image src={plan.img} alt="insurance" width={350} height={250} />
          </div>
        ))}

        <div className="mt-4">
          <h5 className="fw-semibold mb-3">Customize Your Plan</h5>
 <div className="mb-3 border rounded p-3 slider-group">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <label className="form-label mb-0">Deductible</label>
    <span className="deductible-value">${deductible}</span>
  </div>
  <input
    type="range"
    className="form-range"
    min="0"
    max="1000"
    step="100"
    value={deductible}
    onChange={(e) => setDeductible(Number(e.target.value))}
  />
</div>


<div className="mb-3 border rounded p-3  slider-group">
     <div className="mb-0 d-flex justify-content-between align-items-center">
    <label className="form-label">Duration</label>
  <span className="deductible-value">{duration} months</span>
  </div>
            <input
              type="range"
              className="form-range"
              min="6"
              max="24"
              step="6"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
            
          </div>
       <div className="mb-3 border rounded p-3 slider-group">
  <div className="d-flex justify-content-between align-items-center mb-2">
    
   <label className="form-label mb-0">coverage limit</label>
  <span className="deductible-value">${coverage}</span>
  
  </div>
  <input
    type="range"
    className="form-range"
    min="0"
    max="100000"
    step="100"
    value={coverage}
    onChange={(e) => setCoverage(Number(e.target.value))}
  />
</div>
          <p className="fw-bold">Estimated Premium: $250/month</p>
          <button className="btn phurchase-btn me-2 mt-3">Purchase</button>
          <button className="btn btn-dark download-btn mt-3">Download Policy Documents</button>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
