import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from './redux/create';

import App from './App';
import Girl from './containers/Girl';
import Contact from './components/Contact';

import 'normalize.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="wrapper">
        <Route path="/" component={App} />
        <Route path="/girl" component={Girl} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
