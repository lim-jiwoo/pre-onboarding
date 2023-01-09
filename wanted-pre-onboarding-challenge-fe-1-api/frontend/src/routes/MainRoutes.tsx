import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth, Todos } from '../views';

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/todos" />}/>
    <Route path="auth" element={<Auth />}/>
    <Route path="todos" element={<Todos />}/>
    <Route path="*" element={
      <main>
        <p>404 Page Not Found</p>
      </main>
    }/>
  </Routes>
)