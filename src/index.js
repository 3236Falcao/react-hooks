import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Exemplo01 from './hooks/Exemplo01_useState';
import Exemplo02 from './hooks/Exemplo02_useState';
import Exemplo03 from './hooks/Exemplo03_useState';
import Exemplo04 from './hooks/Exemplo04_useState';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Exemplo04 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
