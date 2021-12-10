export enum ProductsActionTypes {
    FETCH_PRODUCTS="FETCH_PRODUCTS"
}

export interface IProductItem {
    id: number;
    name: string;
    detail: string;
} 

export interface IProductsResponse {
    current_page: number;
    from: number;
    data: Array<IProductItem>;
}

export interface ProductsState {
    products: Array<IProductItem>;
}


export interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS,
    payload: Array<IProductItem>
}

export type ProductActions = FetchProductsAction;

