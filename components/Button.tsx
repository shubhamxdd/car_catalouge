"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  hoverStyles,
  rightIcon,
  textStyles,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles} ${hoverStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles} `}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
