import { Reducer } from 'redux'
import { UserTaskAction, UserTaskActionType, StageState } from '../../types/usersTasksTypes'

const initState = {
    stages: [],
    loading: false,
}
export const userTaskReducer: Reducer<StageState, UserTaskAction> = (state = initState, action) => {
    switch (action.type) {
        case UserTaskActionType.FETCH_USER_TASKS:
            return { ...state, loading: true, error: undefined }
        case UserTaskActionType.FETCH_USER_TASKS_SUCCESS:
            return { ...state, stages: action.payload, loading: false }
        case UserTaskActionType.FETCH_USER_TASKS_REJECT:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
     }
}
