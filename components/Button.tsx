"use client";
import { ButtonProps } from "@/types";

const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles} `}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
