import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export default function Cart() {
  const {
    cart,
    AddToCart,
    DecreaseQuantity,
    currency,
    getTotal,
    deleteFromCart,
  } = useContext(AppContext);
  return (
    <div className="relative">
      <h1 className="text-center font-semibold text-xl">
        Total Price:{currency.format(getTotal())}
      </h1>
      {cart.length === 0 ? (
        <h1 className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">Yoyr Shopping cart is Empty</h1>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 my-14 bg-stone-100 p-10">
          {cart.map((p) => (
            <div
              key={p.id}
              className="w-[350px] h-[400px] flex flex-col items-center  shadow-lg  bg-white  rounded-md p-8"
            >
              <img src={p.img} alt="" className="w-[150px] h-[150px] " />
              <p>{p.name}</p>
              <span>{currency.format(p.price)}</span>
              <span>{p.dateTime}</span>
              <div className="flex gap-16 my-5">
                <button
                  onClick={() => AddToCart(p)}
                  className="bg-green-700 text-white font-semibold w-11 h-11 text-lg rounded-full "
                >
                  +
                </button>
                <span className="text-xl font-semibold">
                  {p.quantity}:الكمية
                </span>
                <button
                  onClick={() => DecreaseQuantity(p)}
                  className="bg-red-600  text-white font-semibold w-11 h-11 text-lg rounded-full "
                >
                  -
                </button>
              </div>
              <button onClick={()=>deleteFromCart(p.id)} className="bg-red-600 text-white w-full p-2 rounded-md">
                حذف المنتج من عربة التسوق
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
