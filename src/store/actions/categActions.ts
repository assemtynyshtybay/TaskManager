import axios from 'axios'
import { Dispatch } from 'redux'
import { Categories, CategoriesTypes, CategoryAction } from '../../types/categoriesTypes'

export const fetchCateg = () => (dispatch: Dispatch<CategoryAction>) => {
    dispatch({ type: CategoriesTypes.FETCH_CATEGORIES})
    axios.get<Categories[]>(`https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/categories.json`).then((res) => {
        console.log(res)
        setTimeout(() => {
            dispatch({ type: CategoriesTypes.FETCH_CATEGORIES_SUCCESS, payload: res.data})
        },1000)
    }).catch(() => {
        dispatch({ type: CategoriesTypes.FETCH_CATEGORIES_REJECT, payload: 'Ошибка при загрузке задач' })
    })
}
