import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser){
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { currentUserId: window.currentUser.id}
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  //Testing

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //Testing end
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
