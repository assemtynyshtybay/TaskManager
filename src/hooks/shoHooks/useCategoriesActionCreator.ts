import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as useCatActionCreator from '../../store/actions/categActions'

export const useCategActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(useCatActionCreator, dispatch)
    }, [dispatch])
}