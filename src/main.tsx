import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
)
