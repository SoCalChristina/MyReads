import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

//keep your UI in sync with the URL. Source: https://reacttraining.com/react-router/web/api/BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'))
