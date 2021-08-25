import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './context'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
