import "./styles.css";

import { useEffect, useRef, useState } from "react";

import AddButton from "../../atoms/button";
import { Item } from "../../../types/item";
import { Product } from "../../../types/product";
import Spacer from "../../atoms/spacer";
import TextInput from "../../atoms/text-input";

type SearchBarProps = {
  addItem: (item: Product) => Promise<void>;
};

export default function SearchBar({ addItem }: SearchBarProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAdd() {
    if (inputRef.current!.value) {
      addItem({ productName: inputRef.current!.value, checked: false });
      setInput("");
    }
  }

  function keyupHandle(event: any) {
    if (event.key === "Enter") handleAdd();
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("keyup", keyupHandle);
    }

    return () => inputRef.current?.removeEventListener("keyup", keyupHandle);
  }, []);

  return (
    <header className="searchbar__header">
      <section className="searchbar__wrapper">
        <TextInput placeholder="novo item" value={input} onChange={(event: any) => setInput(event.target.value)} ref={inputRef} width="100%" />
        <Spacer orientation="horizontal" size="12px" />
        <AddButton onClick={handleAdd} text="Adicionar" icon />
      </section>
    </header>
  );
}
