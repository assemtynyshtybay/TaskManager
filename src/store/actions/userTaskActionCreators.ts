import axios from 'axios'
import { Dispatch } from 'redux'
import { Data, UserTaskAction, UserTaskActionType } from '../../types/usersTasksTypes'

export const fetchUserTasks = () => (dispatch: Dispatch<UserTaskAction>) => {
    dispatch({ type: UserTaskActionType.FETCH_USER_TASKS })
    axios.get<Data[]>(`https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`).then((res) => {
        setTimeout(() => {
            dispatch({ type: UserTaskActionType.FETCH_USER_TASKS_SUCCESS, payload: res.data})
        },1000)
    }).catch(() => {
        dispatch({ type: UserTaskActionType.FETCH_USER_TASKS_REJECT, payload: 'Ошибка при загрузке задач' })
    })
}
