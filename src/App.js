import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPostsThunkRequest } from './thunk/actions/promiseActions';
import { fetchPostsAsyncAwaitThunkRequest } from './thunk/actions/asyncActions';
import { fetchPostsSagaRequest } from './saga/actions';

function App({ requestThunk, requestAsyncAwaitThunk, requestSaga }) {
  return (
    <div className="App">
      <div className='buttons-container'>
        <button onClick={requestThunk}>Fire Thunk</button>
        <button onClick={requestAsyncAwaitThunk}>Fire Async/Await Thunk</button>
        <button onClick={requestSaga}>Fire Saga</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    requestThunk: () => dispatch(fetchPostsThunkRequest()),
    requestAsyncAwaitThunk: () => dispatch(fetchPostsAsyncAwaitThunkRequest()),
    requestSaga: () => dispatch(fetchPostsSagaRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
