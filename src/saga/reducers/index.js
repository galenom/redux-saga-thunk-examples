import {
  FETCH_POSTS_SAGA_REQUEST,
  FETCH_POSTS_SAGA_SUCCESS,
  FETCH_POSTS_SAGA_FAILURE
} from "../actions";

const initialState = {
  isFetching: false,
  posts: [],
  error: null,
};

const sagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SAGA_REQUEST:
      return {
        ...state,
        isFetching: true,
        posts: [],
        error: null,
      }
    case FETCH_POSTS_SAGA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      }
    case FETCH_POSTS_SAGA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default sagaReducer;