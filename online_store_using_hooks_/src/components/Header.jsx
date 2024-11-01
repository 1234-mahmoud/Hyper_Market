import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import "../style/header.css";
export default function Header() {
  const { cart, showlist, showList } = useContext(AppContext);
  const listStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "rgb(59, 130, 246)",
    marginTop: "63px",
    zIndex: "20",
    width: "100%",
    height: "50%",
    display: showlist,
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    padding: "10px",
    fontSize: "1.5rem",
  };
  return (
    <div className="header bg-blue-500 py-4 px-8 w-full flex justify-between items-center text-white text-sm">
      <div className="flex relative">
        <span className="cart_length absolute bottom-6 left-3 text-lg">{cart.length}</span>
        <NavLink to={"components/Cart"}>
          <svg
            className="h-8 w-8 text-slate-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </NavLink>

       <div className="favourite mx-4">
        <NavLink to={"components/Favourite"}>
       <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
        </svg>
        </NavLink>
       </div>
      </div>
      <div className="links flex" style={listStyle}>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Electronics"}
        >
          الإلكترونيات
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Clothes"}
        >
          الملابس
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Furniture"}
        >
          الأثاث
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/HairsTools"}
        >
          العناية بالشعر
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Market"}
        >
          السوبر ماركت
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Devices"}
        >
          الأجهزة الكهربائية
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Tools"}
        >
          العدد الكهربائية
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Toyes"}
        >
          لعب الأطفال
        </NavLink>
        <NavLink
          className="pb-1 hover:border-b-2 border-b-white border-b-solid"
          to={"pages/Watches"}
        >
          الساعات
        </NavLink>
      </div>
      <div className="login mx-5">
        <NavLink to={"components/Login"}>
          <svg
            className="h-8 w-8 text-slate-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </NavLink>
      </div>
      <div className="flex">
        <select name="" id="" className="text-black rounded-sm outline-none">
          <option value="">دمياط</option>
          <option value="">القاهرة</option>
          <option value="">الإسماعلية</option>
          <option value="">المنصورة</option>
        </select>
        <svg
          className="h-8 w-8 text-slate-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="logo ml-5 ">
        <NavLink to={"/components/Store"}>
          <h1 className="txt_logo">الهايبر</h1>
        </NavLink>
        <svg
          onClick={showList}
          className="list h-8 w-8 text-white hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}
