// IMPORT ACTION TYPES
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/a_login.js'

// INITIAL STATE
const initialState = {
    is_loggingIn: false,
    error:'',

    result: undefined
}

// REDUCER
export const login_reducer = (state = initialState, action) => {
    console.log('action', action)
    
    switch( action.type ) {
        case LOGIN_START:
            return {
                ...state,

                is_loggingIn: true,
                error:''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,

                result: action.payload.data,

                is_loggingIn: false,
                error:''
            }
        case LOGIN_FAILURE:
            return {
                ...state,

                is_loggingIn: false,
                error:'Unable to Login'
            }
            
        // DEFAULT 
        default: 
            return state;
    }
}