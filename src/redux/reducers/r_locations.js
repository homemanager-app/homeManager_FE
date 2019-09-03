// AXIOS
    const axios = require('axios')
    
// CREATE ACTION TYPES
    import {
        GET_LOCATIONS_START,
        GET_LOCATIONS_SUCCESS,
        GET_LOCATIONS_FAILURE,
    } from '../actions/a_getLocations'

// INITIAL STATE
    const initialState = {
        is_gettingLocations: false,
        error: '',
    }

// REDUCER
export const location_reducer = ( state = initialState, action) => {
    console.log('action', action)

    switch( action.type ){
        case GET_LOCATIONS_START:
            return {
                ...state,

                is_gettingLocations: true,
                error:''

            }
        case GET_LOCATIONS_SUCCESS:
            return {
                ...state,

                is_gettingLocations: false,
                error: '',  
            }
        case GET_LOCATIONS_FAILURE:
            return {
                ...state,

                is_gettingLocations: false,
                error: 'Unable to get locations',
            }
        // DEFAULT 
        default: 
            return state;
    }
}