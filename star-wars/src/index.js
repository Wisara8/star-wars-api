import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Films from './Films';
import FilmDetails from './FilmDetails';


ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route exact path='/' component={Films}/>
      <Route exact path='/film/:title' component={FilmDetails}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

