import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { IState } from '../store'

export const useTypedSelector: TypedUseSelectorHook<IState> = useSelector
