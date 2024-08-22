import React from "react";

const LoadingSpinner = ({ size = "40px", borderSize = "5px" }) => {
  const sizeStyle = {
    width: size,
    height: size,
    borderWidth: borderSize,
  };

  return (
    <div
      className="border-solid border-white border-t-transparent border-b-transparent rounded-full animate-spin"
      style={sizeStyle}
    ></div>
  );
};

export default LoadingSpinner;