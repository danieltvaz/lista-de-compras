import { AddProductParams, RemoveProductParams, UpdateProductParams } from "../types/requests";
import { useCallback, useEffect, useState } from "react";

import { Product } from "../types/product";
import axiosInstance from "../services/axios";

export default function useList() {
  const [items, setItems] = useState([] as Product[]);
  const [loading, setLoading] = useState(false);

  async function updateItem(item: Product) {
    setLoading(true);

    try {
      const request = await axiosInstance.put("/list/products", {
        product: {
          ...item,
        },
      } as UpdateProductParams);
      await getItems();
    } catch {
      alert("Error while updating item");
    } finally {
      setLoading(false);
    }
  }

  async function addItem(item: Product) {
    setLoading(true);

    try {
      const request = await axiosInstance.post("/list/products", {
        ...item,
      } as AddProductParams);
      await getItems();
    } catch {
      alert("Error while adding item");
    } finally {
      setLoading(false);
    }
  }

  async function removeItem(item: Product) {
    setLoading(true);

    try {
      const request = await axiosInstance.delete("/list/products", {
        params: {
          productId: item.id,
        },
      } as RemoveProductParams);
      await getItems();
    } catch {
      alert("Error while removing item");
    } finally {
      setLoading(false);
    }
  }

  async function getItems(searchText?: string) {
    setLoading(true);

    try {
      const request = await axiosInstance.get("/list/products", {
        params: {
          search: searchText,
        },
      });
      setItems(request.data.data);
    } catch {
      alert("Error while getting items");
    } finally {
      setLoading(false);
    }
  }

  async function uncheckAll() {
    setLoading(true);

    try {
      const request = await axiosInstance.put("/list/products/uncheckAll", {});
      await getItems();
    } catch {
      alert("Error while unchecking all items");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return { updateItem, addItem, removeItem, items, loading, getItems, uncheckAll };
}
