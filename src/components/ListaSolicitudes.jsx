import { useState, useEffect } from "react";
import { solicitudes as datos } from "../data/solicitudes";

export default function ListaSolicitudes() {
    //useState
    const [solicitudes, setSolicitudes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [filtro, setFiltro] = useState("Todas");
    const [busqueda, setBusqueda] = useState("");

    //useEffect
    useEffect(() => {
    const temporizador = setTimeout(() => {
      setSolicitudes(datos);
      setCargando(false);
    }, 1000);

    return () => clearTimeout(temporizador);
    }, []);

    const visibles = solicitudes.filter((s) => {
        const coincideEstado = filtro === "Todas" || s.estado === filtro;
        const coincideTexto = s.titulo.toLowerCase().includes(busqueda.toLowerCase());
        return coincideEstado && coincideTexto;
    });

    if (cargando) return <p>Cargando solicitudes...</p>;

    return (
    <>
      <input
        type="text"
        placeholder="Buscar solicitud..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div>
        {["Todas", "Pendiente", "Aprobada", "Rechazada"].map((estado) => (
          <button key={estado} onClick={() => setFiltro(estado)}>
            {estado}
          </button>
        ))}
      </div>

      {/* aqui reemplaza con la lista de tus componentes*/}
      <ul>
        {visibles.map((s) => (
          <li key={s.id}>
            {s.titulo} - {s.tipo} - {s.estado} - {s.fecha}
          </li>
        ))}
      </ul>
    </>
  );
}