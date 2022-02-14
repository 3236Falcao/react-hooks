import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Exemplo01 from './hooks/Exemplo01_useState';
import Exemplo02 from './hooks/Exemplo02_useState';
import Exemplo03 from './hooks/Exemplo03_useState';
import Exemplo04 from './hooks/Exemplo04_useState';
import Exemplo05 from './hooks/Exemplo05_useEffect';
import Exemplo06 from './hooks/Exemplo06_useEffect';
import Exemplo07 from './hooks/Exemplo07_useContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Exemplo07 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
