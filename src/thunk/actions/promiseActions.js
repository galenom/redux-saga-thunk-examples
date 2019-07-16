import axios from "axios";

export const FETCH_POSTS_THUNK_PROMISE_REQUEST = 'FETCH_POSTS_THUNK_PROMISE_REQUEST';
export const FETCH_POSTS_THUNK_PROMISE_SUCCESS = 'FETCH_POSTS_THUNK_PROMISE_SUCCESS';
export const FETCH_POSTS_THUNK_PROMISE_FAILURE = 'FETCH_POSTS_THUNK_PROMISE_FAILURE';

export const fetchPostsThunkRequest = () => {
  return (dispatch, getState) => {
    
    // const { thunkPromise } = getState();

    // if (thunkPromise.posts.length > 0) {
    //   return;
    // }

    dispatch({ type: FETCH_POSTS_THUNK_PROMISE_REQUEST });
    return axios('https://jsonplaceholder.typicode.com/todos')
      .then(
        response => dispatch(fetchPostsThunkSuccess(response.data)),
        error => dispatch(fetchPostsThunkFailure(error.toJSON().message))
      )
  }
}

export const fetchPostsThunkSuccess = (posts) => ({
  type: FETCH_POSTS_THUNK_PROMISE_SUCCESS,
  posts
})

export const fetchPostsThunkFailure = (error) => ({
  type: FETCH_POSTS_THUNK_PROMISE_FAILURE,
  error
})
