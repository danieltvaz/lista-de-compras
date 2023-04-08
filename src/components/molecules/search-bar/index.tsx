import "./styles.css";

import { useEffect, useRef, useState } from "react";

import Button from "../../atoms/button";
import { Product } from "../../../types/product";
import Spacer from "../../atoms/spacer";
import TextInput from "../../atoms/text-input";

type SearchBarProps = {
  addItem: (item: Product) => Promise<void>;
  searchItem: (searchText: string) => any | void;
};

export default function SearchBar({ addItem, searchItem }: SearchBarProps) {
  const [input, setInput] = useState("");
  const [price, setPrice] = useState("");
  const [searchText, setSearchText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function handleAdd() {
    if (inputRef.current!.value) {
      addItem({ productName: inputRef.current!.value, checked: false, price });
      setInput("");
    }
  }

  function handleSearch() {
    searchItem(searchText);
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
        <div className="searchbar__add-item_wrapper">
          <TextInput
            placeholder="novo item"
            value={input}
            onChange={(event: any) => setInput(event.target.value)}
            ref={inputRef}
            width="100%"
            flex={1}
          />
          <Spacer orientation="horizontal" size="4px" />

          <TextInput
            placeholder="preço"
            value={price}
            onChange={(event: any) => setPrice(event.target.value)}
            width="100%"
            flex={0.3}
            inputMode="decimal"
            icon={false}
          />
          <Spacer orientation="horizontal" size="12px" />
          <Button onClick={handleAdd} text="Adicionar" icon />
        </div>
        <Spacer orientation="vertical" size="12px" />
        <div className="searchbar__search-item_wrapper">
          <TextInput
            placeholder="procurar item"
            value={searchText}
            onChange={(event: any) => setSearchText(event.target.value)}
            width="100%"
            flex={1}
            icon={false}
          />
          <Spacer orientation="horizontal" size="12px" />
          <Button onClick={handleSearch} text="&#10005;" icon={false} variant="danger" size="73px" />
          <Spacer orientation="horizontal" size="4px" />
          <Button
            onClick={() => {
              setSearchText("");
              handleSearch();
            }}
            text="&#9906;"
            icon={false}
            size="73px"
          />
        </div>
      </section>
    </header>
  );
}
