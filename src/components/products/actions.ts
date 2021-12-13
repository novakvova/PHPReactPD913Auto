import { Dispatch } from "react";
import http from "../../http_common";
import { ProductActions, IProductsResponse, ProductsActionTypes, IProductSearch } from "./types";

export const fetchProducts = (search: IProductSearch) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const response = await http.get<IProductsResponse>("api/products", {
        params: search
      });
      const { data, last_page } = response.data;
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS,
        payload: {
          products: data,
          last_page: last_page
        },
      });
      return Promise.resolve();
    } catch (ex) {
      console.log("Problem fetch");
      return Promise.reject();
    }
  };
};
