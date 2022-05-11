import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProductsActions from '../../store/actions/shopActions'

export const useProductActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(ProductsActions, dispatch)
    }, [dispatch])
}
