"use client";
import "./LandingPage.css";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
const LandingPage = () => {
  
   const [selected, setSelected] = useState("customer");
  const [underlineStyle] = useState({});
   const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login'); // Navigates to /auth/login
  };
  const handleSignUpClick = ()=>{
    router.push('/auth/register');
  }
  const featureImages = [
  {
    image: "/assets/images/feature1.png",
    title: "AI Powered Visualization",
  },
  {
    image: "/assets/images/feature2.png",
    title: "Insurance Portal",
  },
  {
    image: "/assets/images/feature3.png",
    title: "BOQ Analysis",
  },
  {
    image: "/assets/images/feature4.png",
    title: "Interior Marketplace",
  },
  {
    image: "/assets/images/feature5.png",
    title: "Order Management",
  },
  {
    image: "/assets/images/feature6.png",
    title: "Vendor Portal",
  },
];

const feature =  [
     "/assets/images/feature7.png",
]
//  useEffect(() => {
//     const el = tabRefs.current[selected];
//     if (el) {
//       setUnderlineStyle({
//         left: el.offsetLeft,
//         width: el.offsetWidth
//       });
//     }
//   }, [selected]);

const steps = [
  {
    icon:  "/assets/images/step1.png",
    title: "Share Your Ideas",
    description: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.",
  },
  {
    icon:  "/assets/images/step2.png",
    title: "Experience the Transformation",
    description: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.",
  },
  {
    icon:  "/assets/images/step3.png",
    title: "Collaborate on Design",
    description: 

       "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space."
      
    
  },
];
  return (
    <>
    <nav className="navbar custom-navbar navbar-expand-lg w-100 pt-3 pb-2">
      <div className="container w-100 d-flex align-items-center justify-content-between">
        {/* Left - Logo */}
        <a className="navbar-brand custom-logo" href="/viab/home">
          VIAB
        </a>

        {/* Right - Links + Buttons */}
        <div className="d-flex align-items-center gap-3">
          <ul className="navbar-nav d-flex flex-row gap-3 mb-0 nav-links">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <button className="btn border border-dark login-btn pt-2 pb-2"  onClick={handleLoginClick}>Login</button>
          <button className="btn btn-dark signup-btn pb-2 pt-2" onClick={handleSignUpClick}>Sign up</button>
        </div>
      </div>
    </nav>



 {/* hero section */}
<div className="container text-center mt-5">
  <div className="d-flex justify-content-center gap-5 role-tabs position-relative">
  <div
    className={`tab-item ${selected === "customer" ? "selected" : ""}`}
    onClick={() => setSelected("customer")}
    // ref={el => tabRefs.customer = el}
  >
    Customer
  </div>
  <div
    className={`tab-item ${selected === "vendor" ? "selected" : ""}`}
    onClick={() => setSelected("vendor")}
    // ref={el => tabRefs.vendor = el}
  >
    Vendor
  </div>
  <div
    className={`tab-item ${selected === "customer2" ? "selected" : ""}`}
    onClick={() => setSelected("customer2")}
    // ref={el => tabRefs.customer2 = el}
  >
    Customer
  </div>
  <div className="tab-underline" style={underlineStyle}></div>
</div>


      <div className="mt-5">
        <h2 className="fw-bold">Elevate Your Space:</h2>
        <h2 className="fw-bold">Design. Visualize. Insure.</h2>
        <p className="descriptionss mt-3">
          VIAB brings AI-powered interior design, seamless shopping, and
          project-backed insurance into one intuitive platform — all in just a few clicks.
        </p>
      </div>
    </div>

    {/* core features */}

    <div className="container my-5 core-section">
      <h4 className="mb-4 fw-semibold">Core Features</h4>
      <div className="w-100 d-flex flex-column">
      <div className="d-flex flex-wrap gap-5">
  {featureImages.map((data, index) => (
    <div key={index} className="feature-box position-relative overflow-hidden">
      <img
        src={data.image}
        className="img-fluid w-100 h-100"
        alt={`feature-${index + 1}`}
      />
      <div className="card-img-overlay d-flex justify-content-start align-items-end p-3">
        <h5 className="card-title text-white">{data.title}</h5>
      </div>
    </div>
  ))}
</div>


        <div className="w-100 ps-lg-5 mt-5 mt-lg-0 d-flex gap-5  mt-5">
            <div className="mt-5 w-50 ">
            {feature.map((images, index) => (
            <div key={index} className="">
              <img src={images} className="img-fluid image-11" width ={100} height={100} alt={`feature-${index + 1}`} />
            </div>
          ))}
            </div>

        <div className="mt-5 w-50" >
          <h5 className="shapping  mb-3">Shaping Your Ideal Home With Expertise</h5>
          <p className="elevate-text">
            Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations,
            crafted with precision for residential or unforgettable living experiences.
          </p>
          <p className="feature-link">Living Room Ambiance Design</p>
          <p className="feature-link">Commercial Office Room Interior Design</p>
          <button className="btn btn-outline-dark rounded-pill px-5  pt-3 pb-3 mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </div>


    {/* steps */}
    <div className="container my-5 steps-section">
      <h4 className="fw-bold text-center mb-5">Bringing Your Vision to Life in Three Easy Steps</h4>
      <div className=" align-items-center d-flex justify-content-between gap-5 ">
        {/* Left: Steps */}
        <div className="w-50">
          {steps.map((step, index) => (
            <div key={index} className="d-flex align-items-start mb-4  mt-5 step-item">
              <div className="icon-wrapper me-3 mt-2">
                <img src={step.icon}  width = {50} height= {50} alt="step-icon" className="step-icon" />
              </div>
              <div>
                <h6 className="step-title">{step.title}</h6>
                <p className="mb-0 desc-font-s">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="w-50 text-center">
          <div className="image-circle-wrapper mx-auto">
            <img src="/assets/images/step4.png"  width = {600} height= {600} alt="Design Space" className="img-fluid circle-image" />
          </div>
        </div>
      </div>
    </div>


    <div className="container my-5">
      <div className=" p-4 ">
        <h1 className="text-center mb-4">What Our Customers Say About Us</h1>
        <div className="d-flex justify-content-between gap-5">
          <div className="w-50">
            <img src="/assets/images/review1.png"   width = {470} height= {470} alt="Interior Design" className="img-fluid " />
          </div>
          <div className="w-50 text-center ps-5 ms-3 mt-5 pt-3">
            <div className="d-flex align-items-center mb-3">
              <img src="/assets/images/review-prof.png"  width = {75} height= {75} alt="Ryan Gomez" className=" me-3" />
              <div className="mt-2">
                <h5>Ryan Gomez</h5>
                <p className="text-muted">New York, USA</p>
              </div>
            </div>
            <p className="text-justify rev-desc">
              Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!
            </p>
            <div className="text-center mt-5 pt-3">
              <button className="btn  btncolor-bg mx-3 pt-1 pb-1"><img src ="/assets/icons/png/left-arrow.png" width={30} height={30}></img></button>
              <button className="btn btncolor-bg mx-3 pt-1 pb-1"><img src = "/assets/icons/png/right-arrow.png" width={30} height={30}></img></button>
            </div>
          </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="new-subsc">Subscribe to Our Newsletter for Design Insights</p>
          <p className=" subs-des">Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox</p>
    <div className="input-group custom-email-group w-100 mt-5">
     <span className="input-group-text email-icon">
  <img src ="/assets/icons/png/emailicon.png" width={25} height={25} ></img>
  </span>
  <input
    type="email"
    className="form-control input-email pt-2 pb-2"
    placeholder="Enter your email address"
  />
  <button className="btn subscribe-btn mt-2 mb-2 me-2">Subscribe</button>
</div>

        </div>
      </div>
    


    {/* footer */}

    <div className="container p-0">
    
      <div className="bg-dark text-light p-4" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="text-start">
          <h1>VIAB</h1>
          <p className="inter-footer mt-2">Interior your premier destination for luxury and modern interior design</p>
          <div className="d-flex gap-4 mt-5">
            <img src ="/assets/icons/png/f-facebook.png" width={16} height={16} ></img>
            <img src ="/assets/icons/png/f-twitter.png" width={16} height={16}></img>
            <img src ="/assets/icons/png/f-instagram.png" width={16} height={16}></img>
            <img src ="/assets/icons/png/f-linkendin.png" width={16} height={16}></img>
          </div>
        </div>
        <div className="text-start">
          <h4>Our Services</h4>
          <p>AI driven design visualization</p>
          <p>Furniture marketplace</p>
          <p>Insurance services</p>
          <p>Role based dashboards</p>
        </div>
        <div className="text-start">
          <h4>Join Our Community</h4>
          <p>FAQs</p>
          <p>Terms and conditions</p>
          <p>Privacy Statement</p>
        </div>
        <div className="text-start">
          <h4>About Us</h4>
          <p>info@interior.com</p>
          <p>xyz town, near , city , country</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
