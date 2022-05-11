export enum CategoriesTypes {
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_REJECT = 'FETCH_CATEGORIES_REJECT'
}
export type ChildCat = {
  id: number,
  name: string,
  parentId: number
}
export type Categories = {
  childCategories: ChildCat[],
  id: number,
  name: string,
}
export type DataState = {
  data: Categories[]
  loading: boolean
}

export type FetchCategories = {
  type: CategoriesTypes.FETCH_CATEGORIES,
}
export type FetchCategoriesSuccessAction = {
  type: CategoriesTypes.FETCH_CATEGORIES_SUCCESS,
  payload: Categories[]
}
export type FetchCategoriesRejectAction = {
  type: CategoriesTypes.FETCH_CATEGORIES_REJECT,
  payload: string
}
export type CategoryAction = FetchCategories | FetchCategoriesSuccessAction | FetchCategoriesRejectAction
