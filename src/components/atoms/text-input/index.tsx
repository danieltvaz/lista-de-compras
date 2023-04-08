import "./styles.css";

import { ComponentPropsWithRef, forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

type TextInputCustomProps = {
  icon?: boolean;
  width?: string;
  flex?: number;
} & ComponentPropsWithRef<"input">;

const TextInput = forwardRef<HTMLInputElement, TextInputCustomProps>(({ icon = true, width, flex, ...props }, ref) => {
  return (
    <div className="textinput__wrapper" style={{ flex }}>
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
