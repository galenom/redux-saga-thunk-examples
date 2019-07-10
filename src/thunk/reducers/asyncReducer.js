import {
  FETCH_POSTS_THUNK_ASYNC_REQUEST,
  FETCH_POSTS_THUNK_ASYNC_SUCCESS,
  FETCH_POSTS_THUNK_ASYNC_FAILURE
} from "../actions/asyncActions";

const initialState = {
  isFetching: false,
  posts: [],
  error: null,
};

const thunkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_THUNK_ASYNC_REQUEST:
      return {
        ...state,
        isFetching: true,
        posts: [],
        error: null,
      }
    case FETCH_POSTS_THUNK_ASYNC_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      }
    case FETCH_POSTS_THUNK_ASYNC_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default thunkReducer;