import "./styles.css";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../../types/product";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

type ListItemProps = {
  item: Product;
  removeItem: (product: Product) => any;
  updateItem: (product: Product) => any;
};

export default function ListItem({
  item,
  removeItem,
  updateItem,
}: ListItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [newItem, setNewItem] = useState<Product>({
    checked: false,
    productName: "Loading...",
    id: "0",
  } as Product);

  function handleDone(event: ChangeEvent<HTMLInputElement>) {
    const newItem = { ...item, checked: event.target.checked };
    setNewItem(newItem);
  }

  function handleProductName(event: ChangeEvent<HTMLInputElement>) {
    const newItem = { ...item, productName: event.target.value };
    setNewItem(newItem);
  }

  function handleEdit() {
    if (!item.productName) return;

    setIsEdit((prev) => !prev);

    if (isEdit) handleSave();

    setTimeout(() => inputRef.current!.focus(), 100);
  }

  function handleSave() {
    updateItem(newItem);
  }

  useEffect(() => {
    setNewItem(item);
  }, []);

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => e.key === "Enter" && handleEdit();

    inputRef.current?.addEventListener("keyup", handleEnter);

    return () => inputRef.current?.removeEventListener("keyup", handleEnter);
  }, []);

  return (
    <li className="listitem__wrapper">
      <div className="listitem__description__wrapper">
        <input
          type="checkbox"
          id={newItem.id?.toString()}
          onChange={handleDone}
        />
        <label htmlFor={newItem.id?.toString()}>
          <input
            value={newItem.productName}
            onChange={handleProductName}
            className={
              newItem.checked
                ? "listitem__description-input--done listitem__description-input"
                : "listitem__description-input"
            }
            disabled={!isEdit}
            ref={inputRef}
          />
        </label>
      </div>
      <div className="listitem__buttons__wrapper">
        <button onClick={handleEdit} className="listitem__editbutton">
          {isEdit ? "Salvar" : "Editar"}
        </button>
        <button
          onClick={() => removeItem(newItem)}
          className="listitem__removebutton">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}
