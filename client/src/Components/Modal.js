import React from "react";

const Modal = ({ text }) => {
  return (
    <div className="modal">
      <p style={{ color: "black" }}>{text}</p>
    </div>
  );
};

export default Modal;
