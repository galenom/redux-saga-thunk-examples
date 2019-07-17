import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS_SAGA_SUCCESS, FETCH_POSTS_SAGA_FAILURE, FETCH_POSTS_SAGA_REQUEST } from './actions';

const axiosRequest = () => {
  return axios('https://jsonplaceholder.typicode.com/todos');
}

export function* fetchPosts() {
  try {
    const response = yield call(axiosRequest);
    yield put({ type: FETCH_POSTS_SAGA_SUCCESS, posts: response.data })
  } catch (error) {
    yield put({ type: FETCH_POSTS_SAGA_FAILURE, error: error.toJSON().message })
  }
}

function* mySaga() {
  yield takeLatest(FETCH_POSTS_SAGA_REQUEST, fetchPosts);
}

export default mySaga;