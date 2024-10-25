import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greeting from './Greeting.jsx'
import Foodie from './Foodie.jsx'
import Person from './JSXtest.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)
