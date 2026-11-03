import { NavLink, Route, Routes } from 'react-router';
import Inicio from './pages/Inicio.jsx';
import Redux from './pages/Redux.jsx';
import SolicitudList from './components/SolicitudList.jsx';
import './App.css';
import { SolicitudesProvider } from './context/solicitudesContext';
import StatsSummary from './components/StatsSummary.jsx';

export default function App() {
  return (
    <SolicitudesProvider>
      <header>
        <h1>Gestión de Solicitudes Académicas</h1>

        <nav className="menu-principal" aria-label="Navegacion principal">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? "enlace activo" : "enlace")}
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/solicitudes" 
            className={({ isActive }) => (isActive ? "enlace activo" : "enlace")}
          >
            Solicitudes
          </NavLink>
          
          <NavLink
            to="/redux"
            className={({ isActive }) => (isActive ? "enlace activo" : "enlace")}
          >
            Redux
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route 
            path="/solicitudes" 
            element={
              <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem' }}>
                <StatsSummary />
                <div style={{ marginTop: '2rem' }}>
                  <SolicitudList />
                </div>
              </div>
            } 
          />

          <Route path="/redux" element={<Redux />} />

          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </main>
    </SolicitudesProvider>
  );
}