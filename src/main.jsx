import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Bootstrap js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
