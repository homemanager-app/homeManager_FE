// AXIOS
    import axios from 'axios'

// CREATE ACTION TYPES
    export const GET_LOCATIONS_START= 'GET_LOCATIONS_START'
    export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS'
    export const GET_LOCATIONS_FAILURE = 'GET_LOCATIONS_FAILURE'

// ACTION CREATOR
    export const get_locations = passedInfo => {
        console.log('inside get_location action creator')

        // SEND FIRST ACTION
        return dispatch => {
            dispatch({ type: GET_LOCATION_START})

            // START AXIOS CALL

            axios
                .get(`http://localhost:1313/locations`)
                .then()
                .catch()
        }
    }