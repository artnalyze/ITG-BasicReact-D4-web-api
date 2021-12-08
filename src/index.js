import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Mainroutes from './routes';
import './styles/custom.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Mainroutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);