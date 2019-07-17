import SagaTester from 'redux-saga-tester';
import axios from 'axios';

import saga from '../index'
import { FETCH_POSTS_SAGA_REQUEST, FETCH_POSTS_SAGA_SUCCESS } from '../actions';

jest.mock('axios');

axios.mockResolvedValue({ data: [{ id: 1 }] });

describe('redux-saga test', () => {
  let sagaTester;
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(saga);
  })
  test('expect', async () => {
    sagaTester.dispatch({ type: FETCH_POSTS_SAGA_REQUEST });
    expect(sagaTester.numCalled(FETCH_POSTS_SAGA_REQUEST)).toBe(1);
    const successAction = await sagaTester.waitFor(FETCH_POSTS_SAGA_SUCCESS);
    expect(successAction.type).toBe(FETCH_POSTS_SAGA_SUCCESS);
    expect(successAction.posts).toEqual([{ id: 1 }])
  });
});