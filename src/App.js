import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPostsThunkRequest } from './thunkActions/promiseActions';
import { fetchPostsAsyncAwaitThunkRequest } from './thunkActions/asyncActions';

function App({ requestThunk, requestAsyncAwaitThunk }) {
  const fireThunkRequest = () => {
    requestThunk();
  }

  const fireAsyncAwaitThunkRequest = () => {
    requestAsyncAwaitThunk();
  }

  const fireSagaRequest = () => {

  }

  return (
    <div className="App">
      <div className='buttons-container'>
        <button onClick={fireThunkRequest}>Fire Thunk</button>
        <button onClick={fireAsyncAwaitThunkRequest}>Fire Async/Await Thunk</button>
        <button onClick={fireSagaRequest}>Fire Saga</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    thunkReduxState: state.thunkReduxState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestThunk: () => dispatch(fetchPostsThunkRequest()),
    requestAsyncAwaitThunk: () => dispatch(fetchPostsAsyncAwaitThunkRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
