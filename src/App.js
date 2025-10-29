"use client";
import React from "react";
import "./App.css";

const Loader = ({ size = 40, color = "dodgerblue" }) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: size,
        height: size,
        border: `4px solid ${color}`,
        borderTop: `4px solid transparent`,
        borderRadius: "50%",
      }}
    />
  );
};

export default Loader;
