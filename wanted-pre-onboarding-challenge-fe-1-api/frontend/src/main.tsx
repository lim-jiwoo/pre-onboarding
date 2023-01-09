import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';
import { TodoProvider } from './context/TodoContext';
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <MainRoutes />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
