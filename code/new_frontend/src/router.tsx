import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import RequireAuth from './components/PrivateRoute';
import Profile from './routes/Profile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div className="text-center">Carregando...</div>}>
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/" element={ <Home />} />
            <Route path="/perfil" element={ <Profile />} />
            
            <Route element={<RequireAuth/>}>
            </Route>

          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
