import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ExportPage from '../export-page/';
import SidePanel from '../side-panel/';

import '@atlaskit/css-reset';
import './app.css';

const App = () => {
  return (
    <div className='main-wrapper'>
      <SidePanel/>
      <div className='content-wrapper'>
        <Switch>
          <Route path='/' component={() => {
            return (
              <div className='container'>
                <h1>Welcome</h1>
              </div>)
          }} exact/>
          <Route path='/export/' component={ExportPage}/>
          <Route render={() => {
            return (
              <div className='container'>
                <h3>Page not found</h3>
              </div>)
          }}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;