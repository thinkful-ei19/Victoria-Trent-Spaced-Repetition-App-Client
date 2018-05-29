import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SUBMITTED_ANSWER
} from '../actions/protected-data';

const initialState = {
    data: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SUBMITTED_ANSWER) {
      console.log(action)
        return Object.assign({}, state, {
            data: action.data
        });
    }
    return state;
}
