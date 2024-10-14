import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const getEgyptDateTime = () => {
    const currentDate = new Date();
    const optionsDate = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };
    const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
    const dateString = currentDate.toLocaleDateString("ar-EG", optionsDate);
    const timeString = currentDate.toLocaleTimeString("ar-EG", optionsTime);
    return `${dateString} - ${timeString}`;
  };
  const dateTimeString = getEgyptDateTime();

  const ADD_TO_CART = "ADD_TO_CART";
  const DEC_QUANTITY = "decrease_Quantity";
  const DELETE_FROM_CART = "DeleteFromCart";
  const ADD_FAVORITE = "Add_To_Favourite";
  const REMOVE_FAVORITE = "REMOVE_FAVORITE";

  const init = {
    cart: [],
    favorites: [],
  };

  const ProductReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const { product } = action.payload;
        const existingProduct = state.cart.find((item) => item.id === product.id);
        if (existingProduct) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    TotalPrice: (item.quantity + 1) * item.price,
                    dateTime: dateTimeString,
                  }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [
              ...state.cart,
              { ...product, quantity: 1, TotalPrice: product.price, dateTime: dateTimeString },
            ],
          };
        }

      case DEC_QUANTITY:
        const { product: decProduct } = action.payload;
        const existingDecProduct = state.cart.find((item) => item.id === decProduct.id);
        if (existingDecProduct && existingDecProduct.quantity > 1) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === decProduct.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    TotalPrice: (item.quantity - 1) * item.price,
                    dateTime: dateTimeString,
                  }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== decProduct.id),
          };
        }

      case DELETE_FROM_CART: {
        const { productId } = action.payload;
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== productId),
        };
      }

      case ADD_FAVORITE:
        if (state.favorites.find((product) => product.id === action.payload.id)) {
          return state;
        }
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };

      case REMOVE_FAVORITE: {
        const { productId } = action.payload;
        return {
          ...state,
          favorites: state.favorites.filter((product) => product.id !== productId),
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(ProductReducer, init);

  const AddToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  // Corrected function name
  const DecreaseQuantity = (product) => {
    dispatch({ type: DEC_QUANTITY, payload: { product } });
  };

  const deleteFromCart = (productId) => {
    dispatch({ type: DELETE_FROM_CART, payload: { productId } });
  };

  const removeFavorite = (productId) => {
    dispatch({ type: REMOVE_FAVORITE, payload: { productId } });
  };

  const currency = Intl.NumberFormat("EGP", {
    style: "currency",
    currency: "EGP",
  });

  const getTotal = () => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const addFavorite = (product) => {
    dispatch({
      type: ADD_FAVORITE,
      payload: product,
    });
  };

  const [show, setShow] = useState("showMsg");
  const showModal = () => {
    setShow("hideMsg");
  };

  const [showlist, setShowlist] = useState("none");
  const showList = () => {
    setShowlist(showlist === "none" ? "flex" : "none");
  };

  const values = {
    AddToCart,
    DecreaseQuantity, // Updated function reference
    currency,
    getTotal,
    deleteFromCart,
    show,
    showModal,
    showlist,
    showList,
    addFavorite,
    favorites: state.favorites,
    cart: state.cart,
    removeFavorite,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
