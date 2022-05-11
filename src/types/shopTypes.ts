export enum ShopTypes {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_DATA',
  FETCH_PRODUCT_REJECT = 'FETCH_ERROR'
}

export type Product = {
  id: number,
  image: string,
  title: string,
  price: number,
}
export type DataState = {
  data: Product[],
  loading: boolean
}

export type FetchProductAction = {
  type:ShopTypes.FETCH_PRODUCT,
}
export type FetchProductsSuccessAction = {
  type: ShopTypes.FETCH_PRODUCT_SUCCESS,
  payload: Product[]
}
export type FetchProductsRejectAction = {
  type: ShopTypes.FETCH_PRODUCT_REJECT,
  payload: string
}
export type ShopAction = FetchProductAction | FetchProductsSuccessAction | FetchProductsRejectAction
