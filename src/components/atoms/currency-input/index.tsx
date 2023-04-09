import "./styles.css";

import React, { ComponentProps, useRef, useState } from "react";

import { formatMoney } from "../../../utils";

export default function CurrencyInput(props: ComponentProps<"input">) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="input__wrapper">
      <input
        inputMode="numeric"
        className="input__input_element"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <span onClick={handleInputClick} className="input__presentation-value_text">
        {formatMoney(value)}
      </span>
    </div>
  );
}
