import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { CategReducer } from './reducers/categoriesReducer'
import { ProductReducer } from './reducers/productsReducers'
import { userTaskReducer } from './reducers/userTaskReducer'

const rootReducer = combineReducers({
    userTask: userTaskReducer,
    shop: ProductReducer,
    categ: CategReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type IState = ReturnType<typeof rootReducer>
