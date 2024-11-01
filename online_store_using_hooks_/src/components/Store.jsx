import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img1 from "../pic/one.jpg";
import img2 from "../pic/two.jpg";
import img3 from "../pic/three.jpg";
import img4 from "../pic/four.jpg";
import { branches } from "../data/branches";
import { Link } from "react-router-dom";
import MsgPortal from "./MsgPortal";
import '../style/header.css'

export default function Store() {
  return (
    <div className="store relative z-0">
      <div className="slider">
        <AwesomeSlider mobileTouch={true} className="slider" >
          <img data-src={img1} alt="" />
          <img data-src={img2} alt="" />
          <img data-src={img3} alt="" />
          <img data-src={img4} alt="" />
        </AwesomeSlider>
      </div>

      <div className="flex flex-wrap justify-center gap-8 my-14 bg-stone-100 p-10">
        {branches.map((b) => (
          <div
            key={b.id}
            className="cards w-[250px] h-[250px] flex flex-col items-center  shadow-lg  bg-white  rounded-md p-8"
          >
            <div key={b.id} className="transparent"></div>
            <Link to={b.link}>
            
            <img
              src={b.img}
              alt=""
              className="w-[100px] h-[100px] hover:scale-50 transition-all duration-700"
            />
            </Link>
            <h1 className="text-lg font-bold mt-6">{b.branch_name}</h1>
            <p>{b.txt}</p>
          </div>
        ))}
      </div>
 
        <MsgPortal>
        مرحبا بكم في متجرنا
        </MsgPortal>

    </div>
  );
}
