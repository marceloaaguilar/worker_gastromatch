import { Routes, Route, BrowserRouter } from "react-router";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('./routes/Home'));
const Login = lazy(() => import('./routes/Login'));
const Register = lazy(() => import('./routes/Register'));


export default function AppRouter() {
  return (
    <BrowserRouter>
       <Suspense fallback={<div className="text-center">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
