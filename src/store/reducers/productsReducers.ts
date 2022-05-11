import { Reducer } from 'redux'
import { DataState, ShopAction, ShopTypes } from '../../types/shopTypes'

const initState = {
    data: [],
    loading: false,
}
export const ProductReducer: Reducer<DataState, ShopAction> = (state = initState, action) => {
    switch (action.type) {
        case ShopTypes.FETCH_PRODUCT:
            return { ...state, loading: true, error: undefined }
        case ShopTypes.FETCH_PRODUCT_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case ShopTypes.FETCH_PRODUCT_REJECT:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
     }
}
