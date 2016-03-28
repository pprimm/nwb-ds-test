'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import HomePage from './pages/HomePage'
import LightsPage from './pages/LightsPage'
import TVPage from './pages/TVPage'
import history from './history'

require('./main.css');
require('./vars.css');

export default class App extends React.Component {
   constructor(props) {
     super(props);
   }
   render () {
    return <Router history={history}>
             <Route path = '/' component = {HomePage}/>
             <Route path = '/lights' component={LightsPage}/>
             <Route path = '/appletv' component={TVPage}/>
           </Router>
  }
}
