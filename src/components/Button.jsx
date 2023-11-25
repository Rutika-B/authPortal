import React from "react";

function Button({
  children,
  textClr = "text-White",
  bgColor = "bg-blue-600",
  type = "button",
  classname = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${classname} {props} ${textClr} ${bgColor} ${type}`}
    >
      {children}
    </button>
  );
}

export default Button;
