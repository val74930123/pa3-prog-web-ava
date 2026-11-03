import React, { createContext, useContext, useState } from 'react';
import { solicitudes as DATOS_INICIALES } from '../data/solicitudes';

const SolicitudesContext = createContext(null);

export const SolicitudesProvider = ({ children }) => {
  // Estado global con las solicitudes iniciales
  const [solicitudes, setSolicitudes] = useState(DATOS_INICIALES);

  // Función para registrar una nueva solicitud
  const registrarSolicitud = (nuevaSolicitud) => {
    const nueva = {
      ...nuevaSolicitud,
      id: Date.now(),
      codigo: `EST-2026-${String(solicitudes.length + 1).padStart(3, '0')}`,
      estado: 'Pendiente',
      fecha: new Date().toISOString().split('T')[0]
    };
    setSolicitudes((prev) => [nueva, ...prev]);
  };

  // Función para cambiar de estado (Aprobar o Rechazar)
  const actualizarEstado = (id, nuevoEstado) => {
    setSolicitudes((prev) =>
      prev.map((sol) => (sol.id === id ? { ...sol, estado: nuevoEstado } : sol))
    );
  };

  // Valores calculados para métricas globales
  const totalPendientes = solicitudes.filter((s) => s.estado === 'Pendiente').length;
  const totalAprobadas = solicitudes.filter((s) => s.estado === 'Aprobada').length;
  const totalRechazadas = solicitudes.filter((s) => s.estado === 'Rechazada').length;

  return (
    <SolicitudesContext.Provider
      value={{
        solicitudes,
        totalPendientes,
        totalAprobadas,
        totalRechazadas,
        registrarSolicitud,
        actualizarEstado
      }}
    >
      {children}
    </SolicitudesContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useSolicitudes = () => {
  const context = useContext(SolicitudesContext);
  if (!context) {
    throw new Error('useSolicitudes debe ser usado dentro de SolicitudesProvider');
  }
  return context;
};
