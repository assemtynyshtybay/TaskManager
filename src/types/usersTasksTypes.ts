export enum UserTaskActionType {
  FETCH_USER_TASKS = 'FETCH_TASKS',
  FETCH_USER_TASKS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USER_TASKS_REJECT = 'FETCH_USERS_REJECT'
}
export type UserTask = {
  clientId: string,
  clientName: string,
  createTimestamp: string,
  taskTypeName: string,
}
export type Data = {
  items: UserTask[],
  stage: string,
  stageName: string,
}
export type StageState = {
    stages: Data[],
    loading: boolean
}
export type FetchUserTaskAction = {
    type: UserTaskActionType.FETCH_USER_TASKS,
}
export type FetchUserTaskSuccessAction = {
    type: UserTaskActionType.FETCH_USER_TASKS_SUCCESS,
    payload: Data[]
}
export type FetchUserTaskRejectAction = {
    type: UserTaskActionType.FETCH_USER_TASKS_REJECT,
    payload: string
}
export type UserTaskAction = FetchUserTaskAction | FetchUserTaskSuccessAction | FetchUserTaskRejectAction
