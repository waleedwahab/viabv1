"use client";
// import { furniture, products } from "../../constants/constants";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
// import { assets } from "@/services/utilities/assets/Index";
import favrticon from "../../../../public/assets/icons/png/favouriteicon.png"
import Image from "next/image";
import"./page.css";

const page = () => {
  const [selectedPrice, setSelectedPrice] = useState("Price");
  const [selectedStock, setSelectedStock] = useState("Stock");
  const [selectedRating, setSelectedRating] = useState("Rating");
  const [selectedStyle, setSelectedStyle] = useState("Style");
  const [selectedProduct, setSelectedProduct] = useState("Product");
  const [selectedRoom, setSelectedRoom] = useState("Room");

const products = [
  { title: "Modern Sofa", price: "$1,200", image: "/assets/images/mood1.png" },
 { title: "Dining Table", price: "$850", image: "/assets/images/mood2.png" },
  { title: "Bed Frame", price: "$1,500", image:"/assets/images/mood3.png" },
  { title: "Luxury Armchair", price: "$800", image: "/assets/images/mood4.png"},
];
  const furniture = [
  { name: "Modular Sofa", price: "$1,200", image:"/assets/images/furniture-1.png" },
 { name: "Scandinavian Dining Set",price: "$1,200", image:"/assets/images/furniture-2.png" },
 { name: "King Size Bed", price: "$1,200", image: "/assets/images/furniture-3.png" },
 { name: "Lounge Chair",price: "$1,200",  image: "/assets/images/furniture-4.png" },
  { name: "Coffee Table", price: "$1,200", image: "/assets/images/furniture-5.png" },
  { name: "Bookshelf", price: "$1,200",image:"/assets/images/furniture-6.png" },
  { name: "Side Table",price: "$1,200", image: "/assets/images/furniture-7.png" },
]
  return (
    <div className="app-container text-start">
    <div className="secondlayer pt-4 ps-2 pe-2 pb-4">
    <p className="market-place-head  ">Explore Our Market Place</p>
      <div className="filter-wrapper text-start w-100">
       
        <div className="filters">
          <select
            className="custom-select"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option disabled>Price</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
          </select>

          <select
            className="custom-select"
            value={selectedStock}
            onChange={(e) => setSelectedStock(e.target.value)}
          >
            <option disabled>Stock</option>
            <option value="InStock">In Stock</option>
            <option value="OutOfStock">Out of Stock</option>
          </select>

          <select
            className="custom-select"
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option disabled>Rating</option>
            <option value="1">One Star</option>
            <option value="2">Two Stars</option>
            <option value="3">Three Stars</option>
            <option value="4">Four Stars</option>
            <option value="5">Five Stars</option>
          </select>

          <select
            className="custom-select"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            <option disabled>Style</option>
            <option value="Modern">Modern</option>
            <option value="Classic">Classic</option>
          </select>

          <select
            className="custom-select"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option disabled>Product</option>
            <option value="Sofa">Sofa</option>
            <option value="Chair">Chair</option>
          </select>

          <select
            className="custom-select"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
          >
            <option disabled>Room</option>
            <option value="Living">Living Room</option>
            <option value="Bedroom">Bedroom</option>
          </select>

          <button className="filter-button">Apply Filter</button>
        </div>
      </div>
     <h5 className="sub-title-fur">AI Recommendations</h5>
      <div className="section ">
        
        <div className="home-cards w-100 pt-3 ps-3 pe-3 pb-5">
          <div className="card-grid">
            {products.map((product:any, i:any) => (
              <div className="card-box" key={i}>
                { <Image
                  src={product.image}
                  alt={product.title}
                   width={100}
                    height={100}
                  className="card-img"
                />}
                <div className="card-info">
                  <div className="text-start">
                    <div className="card-title">{product.title}</div>
                    <div className="card-price">{product.price}</div>
                    <div>
                      {" "}
                      <Image
                        src={favrticon}
                        className="fvrt-icon"
                        width={100}
                        height={100}
                        alt={""}
                      />{" "}
                    </div>
                  </div>
                  <div className="card-actions ps-4 pe-4 mt-2">
                    <button className="add-cart w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h5 className="sub-title-fur mt-5 pb-3">All Furniture</h5>
          <div className="card-grid">
            {furniture.map((product:any, i:any) => (
              <div className="card-box" key={i}>
                {<Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.name}
                  className="card-img"
                /> }
                <div className="card-info">
                  <div className="text-start">
                    <div className="card-title">{product.name}</div>
                    <div className="card-price">{product.price}</div>
                    <div>
                      {" "}
                      <Image
                        width={100}
                        height={100}
                        alt={""}
                        src={favrticon}
                        className="fvrt-icon"
                      />{" "}
                    </div>
                  </div>
                  <div className="card-actions ps-4 pe-4 mt-2">
                    <button className="add-cart w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
            {/* {furniture.map((item, i) => (
            <div className="card-box" key={i}>
              <img src={item.image} alt={item.name} className="card-img" />
              <div className="card-info">
                <div className="card-title">{item.name}</div>
                <div className="card-actions">
                  <button className="add-cart">View</button>
                     <img src = {favouriteicon} className='fvrt-icon'></img>
                </div>
              </div>
            </div>
          ))} */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;

/* App.css */
