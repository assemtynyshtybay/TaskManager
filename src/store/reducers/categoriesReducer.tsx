import { Reducer } from 'redux'
import { CategoriesTypes, CategoryAction, DataState } from '../../types/categoriesTypes'

const initState = {
    data: [],
    loading: false,
}
export const CategReducer: Reducer<DataState, CategoryAction> = (state = initState, action) => {
    switch (action.type) {
        case CategoriesTypes.FETCH_CATEGORIES:
            return { ...state, loading: true, error: undefined }
        case CategoriesTypes.FETCH_CATEGORIES_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case CategoriesTypes.FETCH_CATEGORIES_REJECT:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
     }
}
