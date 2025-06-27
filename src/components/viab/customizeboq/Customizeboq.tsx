"use client";
import React,{useState} from "react";
import "./Customizeboq.css"
const Customizeboq = ()=>
{
const materials = [
    { image:"/assets/icons/png/wood.png", title:"Wood"},
    { image:"/assets/icons/png/metal.png", title:"Metal"},
    { image:"/assets/icons/png/glass.png", title:"Glass"},
    { image:"/assets/icons/png/concrete.png", title:"Concrete"},
    { image:"/assets/icons/png/plastic.png", title:"Plastic"},
    { image:"/assets/icons/png/ceramic.png", title:"Ceramic"}   
];
const finishing = ["Standard", "Premium", "Luxury"];
const conditions = ["Indoor", "Outdoor", "Mixed"];
const sustainability = ["Low", "Medium", "High"];
const styles = ["Modern", "Traditional", "Minimalist", "Rustic", "Industrial"];
  const [usageType, setUsageType] = useState("");
return(
<>
<div className="container-fluid  insuranceSection py-4 pb-5">
<div className="container py-4 px-4 second-layer ">
 <div className="boq-title ">Customize your BoQ</div>

      <label className="boq-label">Usage Type</label>
      <input
        className="form-control boq-input"
        value={usageType}
        onChange={(e) => setUsageType(e.target.value)}
      />

      <label className="boq-label ">Material Preferences</label>
      <div className="boq-btn-group d-flex flex-wrap ">
        {materials.map((item, i:number) => (
          <button key ={i}  className="btn btn-outline-secondary pe-5 new-color pt-3 pb-3">
            <div ><span className="me-1"> <img src={item.image} width={40} height={40} alt="Material" /> </span>{item.title} </div> 
          </button>
        ))}
      </div>

      <label className="boq-label">Finishing Quality</label>
      <div className="boq-btn-group d-flex flex-wrap">
        {finishing.map((item) => (
          <button key={item} className="btn btn-outline-secondary">
            {item}
          </button>
        ))}
      </div>

      <label className="boq-label">Environmental Conditions</label>
      <div className="boq-btn-group d-flex flex-wrap">
        {conditions.map((item) => (
          <button key={item} className="btn btn-outline-secondary">
            {item}
          </button>
        ))}
      </div>

      <label className="boq-label">Sustainability</label>
      <div className="boq-btn-group  d-flex flex-wrap">
        {sustainability.map((item) => (
          <button key={item} className="btn btn-outline-secondary">
            {item}
          </button>
        ))}
      </div>

      <label className="boq-label">Style Preferences</label>
      <div className="boq-btn-group d-flex flex-wrap">
        {styles.map((item) => (
          <button key={item} className="btn btn-outline-secondary">
            {item}
          </button>
        ))}
      </div>
<div className="w-100 text-end">
      <button className="btn btn-primary generate-btn text-end">Generate BoQ</button>
      </div>
    </div>
</div>



</>
    )
}
export default Customizeboq;