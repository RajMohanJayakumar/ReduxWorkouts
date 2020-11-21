import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import commonStore from './redux/store/commonStore';


ReactDOM.render(
  <Provider store={commonStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
