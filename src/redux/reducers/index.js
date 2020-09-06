import { combineReducers } from 'redux'
import ParkirReducer from './ParkirReducer'
import KataReducer from './KataReducer'

export default combineReducers({
    biaya: ParkirReducer,
    jmlKata: KataReducer
})