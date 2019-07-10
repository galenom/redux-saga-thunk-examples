export const FETCH_POSTS_SAGA_REQUEST = 'FETCH_POSTS_SAGA_REQUEST';
export const FETCH_POSTS_SAGA_SUCCESS = 'FETCH_POSTS_SAGA_SUCCESS';
export const FETCH_POSTS_SAGA_FAILURE = 'FETCH_POSTS_SAGA_FAILURE';

export const fetchPostsSagaRequest = () => ({
  type: FETCH_POSTS_SAGA_REQUEST
});


export const fetchPostsSagaSuccess = (posts) => ({
  type: FETCH_POSTS_SAGA_SUCCESS,
  posts,
});

export const fetchPostsSagaFailure = (error) => ({
  type: FETCH_POSTS_SAGA_FAILURE,
  error
})