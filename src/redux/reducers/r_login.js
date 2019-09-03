import jwt_decode from 'jwt-decode'


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

    token: undefined,
    result: undefined
}

// REDUCER
export const login_reducer = (state = initialState, action) => {
    console.log('action', action)
    console.log('action.payload', action.payload)

    switch( action.type ) {
        case LOGIN_START:
            return {
                ...state,

                is_loggingIn: true,
                error:''
            }
        case LOGIN_SUCCESS:

            const decoded_JWT_token = jwt_decode(action.payload.data.token)
            const userObjectToPass = {
                userID: decoded_JWT_token.userID,
                adminCat: decoded_JWT_token.adminCat
            }

            return {
                ...state,

                token: action.payload.data.token,
                currentUser: userObjectToPass,

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