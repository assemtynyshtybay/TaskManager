import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userTaskReducer } from './reducers/userTaskReducer'

const rootReducer = combineReducers({
    userTask: userTaskReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type IState = ReturnType<typeof rootReducer>
