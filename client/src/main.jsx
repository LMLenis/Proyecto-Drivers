import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import  store  from './redux/store/index'
import { Provider } from "react-redux"
import App from './App.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode> 
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
</Provider>



);
