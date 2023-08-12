import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  hoverStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
