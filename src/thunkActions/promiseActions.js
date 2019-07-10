import axios from "axios";

export const FETCH_POSTS_THUNK_REQUEST = 'FETCH_POSTS_THUNK_REQUEST';
export const FETCH_POSTS_THUNK_SUCCESS = 'FETCH_POSTS_THUNK_SUCCESS';
export const FETCH_POSTS_THUNK_FAILURE = 'FETCH_POSTS_THUNK_FAILURE';

export const fetchPostsThunkRequest = () => {
  return (dispatch, getState) => {
    
    // const { thunkReduxState } = getState();

    // if (thunkReduxState.posts.length > 0) {
    //   return;
    // }

    dispatch({ type: FETCH_POSTS_THUNK_REQUEST });
    return axios('https://jsonplaceholder.typicode.com/todos')
      .then(
        response => dispatch(fetchPostsThunkSuccess(response.data)),
        error => dispatch(fetchPostsThunkFailure(error.toJSON().message))
      )
  }
}

export const fetchPostsThunkSuccess = (posts) => ({
  type: FETCH_POSTS_THUNK_SUCCESS,
  posts
})

export const fetchPostsThunkFailure = (error) => ({
  type: FETCH_POSTS_THUNK_FAILURE,
  error
})
