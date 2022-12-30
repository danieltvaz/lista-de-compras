import "./styles.css";

import { ComponentProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

type AddButtonProps = ComponentProps<"button"> & { icon?: boolean; text: string };

export default function AddButton({ icon, text, ...props }: AddButtonProps) {
  return (
    <button className="addbutton__button" {...props}>
      {icon && <FontAwesomeIcon icon={faSquarePlus} color="#fff" />}
      {text}
    </button>
  );
}
