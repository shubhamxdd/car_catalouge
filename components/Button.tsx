"use client";
import { ButtonProps } from "@/types";

const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  hoverStyles,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles} ${hoverStyles} hover:animate-pulse `}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
