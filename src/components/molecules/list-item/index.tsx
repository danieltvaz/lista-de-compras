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
    updateItem({ ...newItem, checked: event.target.checked });
  }

  function handleProductName(event: ChangeEvent<HTMLInputElement>) {
    setNewItem((prev) => ({ ...prev, productName: event.target.value }));
  }

  function handleEdit() {
    setIsEdit((prev) => !prev);

    if (isEdit && !newItem.productName) return;

    if (isEdit) handleSave();

    setTimeout(() => inputRef.current!.focus(), 100);
  }

  function handleSave() {
    updateItem(newItem);
  }

  useEffect(() => {
    console.log(newItem);
  }, [newItem]);

  useEffect(() => {
    setNewItem(item);
  }, [item]);

  return (
    <li className="listitem__wrapper">
      <div className="listitem__description__wrapper">
        <input
          type="checkbox"
          id={newItem.id?.toString()}
          onChange={handleDone}
          checked={newItem.checked}
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
