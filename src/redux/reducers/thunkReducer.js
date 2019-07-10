import { FETCH_POSTS_THUNK_REQUEST, FETCH_POSTS_THUNK_SUCCESS, FETCH_POSTS_THUNK_FAILURE } from "../../thunkActions/promiseActions";

const initialState = {
  isFetching: false,
  posts: [],
  error: null,
};

const thunkReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS_THUNK_REQUEST:
      return {
        ...state,
        isFetching: true,
        posts: [],
        error: null,
      }
    case FETCH_POSTS_THUNK_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      }
    case FETCH_POSTS_THUNK_FAILURE:
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