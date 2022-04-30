import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userTaskActionCreators from '../store/actions/userTaskActionCreators'

export const useUserTaskActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(userTaskActionCreators, dispatch)
    }, [dispatch])
}
