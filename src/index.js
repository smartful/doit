import React from 'react';
import ReactDOM from 'react-dom';
import { TaskProvider } from './context/TaskState';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContactProvider } from './context/ContactState';

ReactDOM.render(
  <TaskProvider>
    <ContactProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContactProvider>
  </TaskProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
