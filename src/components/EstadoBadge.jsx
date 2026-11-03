import './EstadoBadge.css'

/**
 * Etiqueta de color que representa el estado de una solicitud.
 * Props:
 *  - estado: 'Pendiente' | 'En revisión' | 'Aprobada' | 'Rechazada'
 */
function claseDeEstado(estado) {
  switch (estado) {
    case 'Pendiente':
      return 'badge--pendiente'
    case 'En revisión':
      return 'badge--revision'
    case 'Aprobada':
      return 'badge--aprobada'
    case 'Rechazada':
      return 'badge--rechazada'
    default:
      return 'badge--pendiente'
  }
}

function EstadoBadge({ estado }) {
  return <span className={`badge ${claseDeEstado(estado)}`}>{estado}</span>
}

export default EstadoBadge
