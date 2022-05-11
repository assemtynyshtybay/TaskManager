import axios from 'axios'
import { Dispatch } from 'redux'
import { Product, ShopAction, ShopTypes } from '../../types/shopTypes'

export const fetchProducts = () => (dispatch: Dispatch<ShopAction>) => {
    dispatch({ type: ShopTypes.FETCH_PRODUCT })
    axios.get<Product[]>(`https://fakestoreapi.com/products`).then((res) => {
        console.log(res)
        setTimeout(() => {
            dispatch({ type: ShopTypes.FETCH_PRODUCT_SUCCESS, payload: res.data})
        },1000)
    }).catch(() => {
        dispatch({ type: ShopTypes.FETCH_PRODUCT_REJECT, payload: 'Ошибка при загрузке задач' })
    })
}
