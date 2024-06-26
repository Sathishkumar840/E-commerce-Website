import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import router from './routes/Index.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { store } from './store/store.js'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

   </React.StrictMode>
  </>
)
