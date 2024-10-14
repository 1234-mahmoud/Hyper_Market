import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
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
  //----------------------------------------------------------------------

  const ADD_TO_CART = "ADD_TO_CART";
  const DEC_QUANTITY = "decrease_Quantity";
  const DeletFromCart = "DeletFromCart";
  const ADD_FAVORITE = "Add_To_Favourite";
  const REMOVE_FAVORITE = "REMOVE_FAVORITE";
  const init = {
    cart: [],
    favorites: [],
  };
  const ProductReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const { product } = action.payload; //this prop will be add to object
        const existingProduct = state.cart.find(
          (item) => item.id === product.id
        );
        if (existingProduct) {
          return state.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  TotalPrice: item.quantity * item.price,
                  dateTime: dateTimeString,
                }
              : item
          );
        } else {
          return {
            ...state,
            cart: [
              ...state.cart,
              { ...product, quantity: 1, dateTime: dateTimeString },
            ],
          };
        }

      case "decrease_Quantity":
        const { product: decProduct } = action.payload; // added this
        const existingDecProduct = state.cart.find(
          (item) => item.id === decProduct.id
        );
        if (existingProduct && existingProduct.quantity > 1) {
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
            cart: state.cart.filter((item) => item.id !== decProduct.id), // Remove item if quantity is 0
          };
        }
      
      case "DeletFromCart":{
        const { productId } = action.payload;
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== productId),
        };
      }
      case ADD_FAVORITE:
        // Avoid duplicates by checking if the product is already in the favorites
        {
          if (state.favorites.find((product) => product.id === action.payload.id)) {
            return state; // Return the same state if the product is already in favorites
          }
          return {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
        }

        case REMOVE_FAVORITE: { // New case for removing from favorites
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
    // const dateTimeString = getEgyptDateTime(); // Get the current date and time for Egypt
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  const DecresseQuantity = (product) => {
    dispatch({ type: DEC_QUANTITY, payload: { product } });
  };

  const deleteFromCart = (productId) => {
    dispatch({ type: DeletFromCart, payload: { productId } }); //we put the productId inside{} as it's an object
  };

  const removeFavorite = (productId) => { // New method for removing from favorites
    dispatch({ type: REMOVE_FAVORITE, payload: { productId } });
  };

  //----------------------------------------------------
  const currency = Intl.NumberFormat("EGP", {
    style: "currency",
    currency: "EGP",
  });
  // Get total price of the cart
  const getTotal = () => {
    return init.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  //-----------------------------------------------------------------

  const addFavorite = (product) => {
    dispatch({
      type: ADD_FAVORITE,
      payload: product,
    });
  };
  //-----------------------------------------------------------------

  const [show, setShow] = useState("showMsg");
  const showModal = () => {
    setShow("hideMsg");
  };
  //-----------------------for mob------------------------------------------
  const [showlist, setShowlist] = useState("none");
  const showList = () => {
    setShowlist(showlist === "none" ? "flex" : "none");
  };
  // -----------------------------------------------------------

  const values = {
    AddToCart,
    DecresseQuantity,
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
    removeFavorite
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
