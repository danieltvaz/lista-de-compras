import "./styles.css";

import { ComponentPropsWithRef, forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

type TextInputCustomProps = {
  icon?: boolean;
  width?: string;
} & ComponentPropsWithRef<"input">;

const TextInput = forwardRef<HTMLInputElement, TextInputCustomProps>(({ icon = true, width, ...props }, ref) => {
  return (
    <div className="textinput__wrapper">
      <input className="textinput__input" ref={ref} style={{ width }} {...props} />
      {icon && (
        <div className="textinput__iconwrapper">
          <FontAwesomeIcon icon={faTags} />
        </div>
      )}
    </div>
  );
});

export default TextInput;
