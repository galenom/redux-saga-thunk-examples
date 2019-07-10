import axios from "axios";
import { FETCH_POSTS_THUNK_REQUEST, FETCH_POSTS_THUNK_SUCCESS, FETCH_POSTS_THUNK_FAILURE } from "./promiseActions";

export const fetchPostsAsyncAwaitThunkRequest = () => {
  return async (dispatch, getState) => {

    // const { thunkReduxState } = getState();

    // if (thunkReduxState.posts.length > 0) {
    //   return;
    // }

    dispatch({ type: FETCH_POSTS_THUNK_REQUEST });
    try {
      const response = await axios('https://jsonplaceholder.typicode.com/todos');
      return dispatch(fetchPostsAsyncAwaitThunkSuccess(response.data));
    } catch (error) {
      return dispatch(fetchPostsAsyncAwaitThunkFailure(error.toJSON().message));
    }
  }
}

export const fetchPostsAsyncAwaitThunkSuccess = (posts) => ({
  type: FETCH_POSTS_THUNK_SUCCESS,
  posts
})

export const fetchPostsAsyncAwaitThunkFailure = (error) => ({
  type: FETCH_POSTS_THUNK_FAILURE,
  error
})