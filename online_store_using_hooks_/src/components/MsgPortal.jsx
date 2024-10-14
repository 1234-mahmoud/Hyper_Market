import { useContext} from "react";
import React from "react";
import ReactDOM from "react-dom";
import bgImage from "./download.jpeg";
import { AppContext } from "../context/AppProvider";
export default function MsgPortal({ children }) {
  const { show, showModal } = useContext(AppContext);
  const modal = document.getElementById("welcome");
  const Modal = (
    <dialog
      open
      className={`msg ${show}`}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <svg
        className="h-8 w-8 text-white absolute top-0 right-0 mx-2 my-4 hover:text-red-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={showModal}
      >
        {" "}
        <circle cx="12" cy="12" r="10" /> <line x1="15" y1="9" x2="9" y2="15" />{" "}
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      {children}
    </dialog>
  );

  
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     showModal();
  //   }, 4000);

  //   // Cleanup the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [showModal]);

  return ReactDOM.createPortal(Modal, modal);
}
