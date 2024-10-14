import {React,useContext} from "react";
import { clothes } from "../data/clothes";
import { AppContext } from "../context/AppProvider";
export default function Clothes() {
  const { AddToCart ,
    currency,
    addFavorite


  } = useContext(AppContext);
  return (
    <div className="flex flex-wrap justify-center gap-8 my-14 bg-stone-100 p-10">
      {clothes.map((c) => (
        <div
          key={c.id}
          className="relative w-[250px] h-[280px] flex flex-col items-center  shadow-lg  bg-white  rounded-md p-8"
        >
          <img src={c.img} alt="" className="w-[100px] h-[100px] " />
          <p className="text-sm text-center my-3 w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">{c.name}</p>
          <span>{currency.format(c.price)}</span>
          <button className="bg-sky-600 p-2 rounded-md text-white font-semibold"
          onClick={()=>AddToCart(c)}
          >
            أضف للعربة
          </button>

          <button className=" p-1 m-1 rounded-md font-semibold absolute bottom-0"
          onClick={()=>addFavorite(c)}
          >
            <svg
          className="h-6 w-6 text-yellow-600"
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
          </button>
        </div>
      ))}
    </div>
  );
}
