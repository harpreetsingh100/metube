import React from "react";

const Button = ({ name }) => {
  return (
    <div className>
      <button className="px-4 py-2 rounded-lg bg-gray-200 m-2">{name}</button>
    </div>
  );
};

export default Button;
