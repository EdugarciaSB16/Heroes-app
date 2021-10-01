import React from 'react';
import ReactDOM from 'react-dom';
import HeroesApp from './HeroesApp';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
  document.getElementById('root')
);