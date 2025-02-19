import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
        <StyledEngineProvider injectFirst>
          
    <App />
    </StyledEngineProvider>
  ,
)
