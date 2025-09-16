import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './router/AppRouter.jsx'
import { Toaster } from 'react-hot-toast'
import { LoginProvider } from './context/authContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <LoginProvider>
          <Toaster position='top-right' />
    <AppRouter />
    </LoginProvider>
    </Provider>
  </StrictMode>,
)
