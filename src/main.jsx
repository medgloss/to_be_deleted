import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store.ts'

createRoot(document.getElementById('root')).render(
 
        <StyledEngineProvider injectFirst>
       <Provider store={store}>
    <App />
    </Provider>
    </StyledEngineProvider>
  ,
)
