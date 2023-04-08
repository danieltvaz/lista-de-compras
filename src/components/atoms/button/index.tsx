import "./styles.css";

import { ComponentProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

type ButtonProps = ComponentProps<"button"> & {
  icon?: boolean;
  text: string;
  variant?: "normal" | "danger";
  size?: string;
};

export default function Button({ icon, text, variant = "normal", size = "150px", ...props }: ButtonProps) {
  return (
    <button
      className="addbutton__button"
      {...props}
      style={{ backgroundColor: variant === "normal" ? "#007bff" : "#a22607", width: size }}>
      {icon && <FontAwesomeIcon icon={faSquarePlus} color="#fff" />}
      {text}
    </button>
  );
}
