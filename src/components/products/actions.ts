import { Dispatch } from "react";
import http from "../../http_common";
import { ProductActions, IProductsResponse, ProductsActionTypes } from "./types";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const response = await http.get<IProductsResponse>("api/products");
      const { data } = response.data;
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS,
        payload: data,
      });
      return Promise.resolve();
    } catch (ex) {
      console.log("Problem fetch");
      return Promise.reject();
    }
  };
};
