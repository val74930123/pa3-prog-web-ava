import { NavLink, Route, Routes } from 'react-router';
import Inicio from './pages/Inicio.jsx';
import ListaSolicitudes from './components/ListaSolicitudes.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1>Gestión de Solicitudes Académicas</h1>

        <nav className="menu-principal" aria-label="Navegacion principal">
          <NavLink to="/" end  className={({ isActive }) => isActive ? "enlace activo" : "enlace"}>Inicio</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/solicitudes" element={<ListaSolicitudes />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </>
  );
}
