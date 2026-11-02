import { Link } from 'react-router';

export default function Inicio() {
  return (
    <main className="inicio">
      <p>Bienvenido a la plataforma de solicitudes académicas.</p>

      <Link className="boton-principal" to="/solicitudes">
        Consultar solicitudes
      </Link>
    </main>
  );
}