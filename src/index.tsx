import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BeerDataProvider } from './components/beer-api-context/beer-api-context';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app';

import BeerService from './services/beer-service';

import './index.css';

const beerService = new BeerService();

ReactDOM.render(
  <Provider store={ store }>
    <BeerDataProvider value={ beerService }>
      <Router>
        <App/>
      </Router>
    </BeerDataProvider>
  </Provider>,
  document.getElementById( 'root' )
);