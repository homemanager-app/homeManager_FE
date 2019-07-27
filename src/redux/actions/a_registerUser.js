// AXIOS
import axios from "axios";

// CREATE ACTION TYPES
    export const REGISTER_START = 'REGISTER_START'
    export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
    export const REGISTER_FAILURE = 'REGISTER_FAILURE'

// ACTION CREATOR
    export const registerUser = registerInfo => {
        console.log('inside registerUser action creator')
        console.log('registerInfo', registerInfo)

        // SEND FIRST ACTION
        return dispatch => {
            dispatch({ type: REGISTER_START })

            // START AXIOS CALL
            axios
                .post(
                    // 'http://localhost:1313/register',
                    'https://home-manager-backend.herokuapp.com/register',
                    registerInfo
                )
                .then( res => {
                    console.log('res', res )
                    // DISPATCH
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: {
                            data: res.data
                        }
                    })
                })
                .catch( err => {
                    console.log('err', err )
                    // DISPATCH
                    dispatch({
                        type: REGISTER_FAILURE,
                        payload: err
                    })
                })
        }
    }