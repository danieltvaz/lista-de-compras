import { Product } from "./product";

export type GetListResponse = {
  statusMessage: string;
  data: Product[];
};

export type AddProductParams = {
  productName: string;
};

export type UpdateProductParams = {
  product: {
    productName: string;
    checked: boolean;
    id: string;
  };
};

export type RemoveProductParams = {
  params: {
    productId: string;
  };
};
