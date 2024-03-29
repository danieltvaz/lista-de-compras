import "./styles.css";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import CurrencyInput from "../../atoms/currency-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../../types/product";
import Spacer from "../../atoms/spacer";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

type ListItemProps = {
  item: Product;
  removeItem: (product: Product) => any;
  updateItem: (product: Product) => any;
};

export default function ListItem({ item, removeItem, updateItem }: ListItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentItem, setCurrentItem] = useState<Product>({
    checked: false,
    productName: "Loading...",
    id: "0",
    price: "0",
  });

  function handleDone(event: ChangeEvent<HTMLInputElement>) {
    updateItem({ ...currentItem, checked: event.target.checked });
  }

  function handleProductName(event: ChangeEvent<HTMLInputElement>) {
    setCurrentItem((prev) => ({ ...prev, productName: event.target.value }));
  }

  function handleProductPrice(event: ChangeEvent<HTMLInputElement>) {
    setCurrentItem((prev) => ({ ...prev, price: event.target.value }));
  }

  function handleEdit() {
    setIsEdit((prev) => !prev);

    if (isEdit && !currentItem.productName) return;

    if (isEdit) handleSave();

    setTimeout(() => inputRef.current!.focus(), 100);
  }

  function handleSave() {
    updateItem(currentItem);
  }

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  return (
    <li className="listitem__wrapper">
      <div className="listitem__description__wrapper">
        <div className="listitem__column">
          <div className="listitem__row">
            <input
              type="checkbox"
              id={currentItem.id?.toString()}
              onChange={handleDone}
              checked={currentItem.checked}
            />
            <label htmlFor={currentItem.id?.toString()}>
              <input
                value={currentItem.productName ?? ""}
                onChange={handleProductName}
                className={
                  currentItem.checked
                    ? "listitem__description-input--done listitem__description-input"
                    : "listitem__description-input"
                }
                disabled={!isEdit}
                ref={inputRef}
              />
            </label>
          </div>
          <Spacer orientation="vertical" size="8px" />
          <CurrencyInput />
        </div>
      </div>

      <div className="listitem__buttons__wrapper">
        <button onClick={handleEdit} className="listitem__editbutton">
          {isEdit ? "Salvar" : "Editar"}
        </button>
        <button onClick={() => removeItem(currentItem)} className="listitem__removebutton">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}
