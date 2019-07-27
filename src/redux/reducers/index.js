// REDUX 
import { combineReducers } from 'redux'

// REDUCERS
    import { register_reducer } from './r_register.js'
    import { login_reducer } from './r_login.js'

export const rootReducer = combineReducers({
    register_reducer,
    login_reducer
})