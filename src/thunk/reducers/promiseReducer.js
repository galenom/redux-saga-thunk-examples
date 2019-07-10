import {
  FETCH_POSTS_THUNK_PROMISE_REQUEST,
  FETCH_POSTS_THUNK_PROMISE_SUCCESS,
  FETCH_POSTS_THUNK_PROMISE_FAILURE
} from "../actions/promiseActions";

const initialState = {
  isFetching: false,
  posts: [],
  error: null,
};

const thunkReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS_THUNK_PROMISE_REQUEST:
      return {
        ...state,
        isFetching: true,
        posts: [],
        error: null,
      }
    case FETCH_POSTS_THUNK_PROMISE_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      }
    case FETCH_POSTS_THUNK_PROMISE_FAILURE:
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