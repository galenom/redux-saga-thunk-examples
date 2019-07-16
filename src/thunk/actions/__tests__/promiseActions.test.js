import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchPostsThunkRequest,
  FETCH_POSTS_THUNK_PROMISE_REQUEST,
  FETCH_POSTS_THUNK_PROMISE_SUCCESS
} from '../promiseActions';

jest.mock('axios');

describe('fetchPostsThunkRequest', () => {

  let mockStore;
  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
  })

  it('should create an request action', async () => {
    const response = { data: [{ id: 1 }] };
    axios.mockResolvedValue(response)

    const expectedActions = [
      { type: FETCH_POSTS_THUNK_PROMISE_REQUEST },
      {
        type: FETCH_POSTS_THUNK_PROMISE_SUCCESS,
        posts: response.data
      }
    ];

    const store = mockStore();

    await store.dispatch(fetchPostsThunkRequest())
    expect(store.getActions()).toEqual(expectedActions);
  });

})