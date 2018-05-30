import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SUBMITTED_ANSWER_FEEDBACK,
    SUBMITTED_ANSWER_ERROR
} from '../actions/protected-data';

const initialState = {
    data: null,
    feedback: null,
    points: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
      console.log(action)
        return Object.assign({}, state, {
            data: action.data,
            feedback: null,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SUBMITTED_ANSWER_FEEDBACK) {
      console.log(action)
        return Object.assign({}, state, {
            feedback: action.data,
            points: action.data.points,
        });
    } else if (action.type === SUBMITTED_ANSWER_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
