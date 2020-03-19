import React, { Component } from "react";

const Modal = ({ position }) => {
  console.log(position);
  return (
    <div
      style={position ? { top: position.y, left: position.x } : null}
      className="hover_modal"
    >
      <h2> Hello </h2>
      <p> This is going to be a test</p>
    </div>
  );
};

export default Modal;
