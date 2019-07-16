import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchPostsAsyncAwaitThunkRequest,
  FETCH_POSTS_THUNK_ASYNC_REQUEST,
  FETCH_POSTS_THUNK_ASYNC_SUCCESS
} from '../asyncActions';

jest.mock('axios');

describe('fetchPostsAsyncAwaitThunkRequest', () => {

  let mockStore;
  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
  })

  it('should create an request action', async () => {
    const response = { data: [{ id: 1 }] };
    axios.mockResolvedValue(response)

    const expectedActions = [
      { type: FETCH_POSTS_THUNK_ASYNC_REQUEST },
      {
        type: FETCH_POSTS_THUNK_ASYNC_SUCCESS,
        posts: response.data
      }
    ];

    const store = mockStore();

    await store.dispatch(fetchPostsAsyncAwaitThunkRequest())
    expect(store.getActions()).toEqual(expectedActions);
  });
  
})