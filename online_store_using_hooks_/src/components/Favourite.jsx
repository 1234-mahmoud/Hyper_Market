import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export default function Cart() {
  const {
    favorites,
    currency,
    removeFavorite
  } = useContext(AppContext);
  return (
    <div className="relative">
     
      { (
        <div className="flex flex-wrap justify-center gap-8 my-14 bg-stone-100 p-10">
          {favorites.map((p) => (
            <div
              key={p.id}
              className="w-[250px] h-[250px] flex flex-col items-center  shadow-lg  bg-white  rounded-md p-8"
            >
              <img src={p.img} alt="" className="w-[100px] h-[100px] " />
              <p>{p.name}</p>
              <span>{currency.format(p.price)}</span>
              <span>{p.dateTime}</span>
              <svg 
              onClick={()=>removeFavorite(p.id)}
          className="h-6 w-6 text-red-600 cursor-pointer"
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
