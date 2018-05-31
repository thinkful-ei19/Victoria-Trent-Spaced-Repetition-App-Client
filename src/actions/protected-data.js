import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const SUBMITTED_ANSWER_FEEDBACK = 'SUBMITTED_ANSWER_FEEDBACK';
export const submittedAnswerFeedback = data => ({
    type: SUBMITTED_ANSWER_FEEDBACK,
    data
});

export const SUBMITTED_ANSWER_ERROR = 'SUBMITTED_ANSWER_ERROR';
export const submittedAnswerError = data => ({
    type: SUBMITTED_ANSWER_ERROR,
    data
});

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = data => ({
    type: NEXT_QUESTION,
    data
});

export const NEXT_ERROR = 'NEXT_ERROR';
export const nextError = data => ({
    type: NEXT_ERROR,
    data
});

export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';
export const fetchStatsSuccess = data => ({
    type: FETCH_STATS_SUCCESS,
    data
});

export const FETCH_STATS_ERROR = 'FETCH_STATS_ERROR';
export const fetchStatsError = error => ({
    type: FETCH_STATS_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            return dispatch(fetchProtectedDataSuccess(data))
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const fetchStatsData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/stats`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            return dispatch(fetchStatsSuccess(data))
        })
        .catch(err => {
            dispatch(fetchStatsError(err));
        });
};

export const submittedAnswer = (name) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/questions`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${authToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'},
    body: JSON.stringify({ name })
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  })
  .then((res) => {
      return dispatch(submittedAnswerFeedback(res))
  })
  .catch(err => {
      dispatch(submittedAnswerError(err));
  });
};
