import EstadoBadge from './EstadoBadge.jsx'
import './SolicitudCard.css'
import { useSolicitudes } from '../context/solicitudesContext';

/**
 * Tarjeta que muestra una solicitud académica.
 * Props:
 *  - solicitud: { id, titulo, tipo, estado, fecha, estudiante?, descripcion? }
 *    `estudiante` y `descripcion` son opcionales: si no vienen, no se muestran.
 */
function formatearFecha(fechaISO) {
  const fecha = new Date(`${fechaISO}T00:00:00`)
  if (Number.isNaN(fecha.getTime())) return fechaISO
  return fecha.toLocaleDateString('es-EC', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function SolicitudCard({ solicitud }) {
  const { id, titulo, tipo, estudiante, fecha, estado, descripcion } = solicitud

  const { actualizarEstado } = useSolicitudes()

  return (
    <article className="card">
      <div className="card__encabezado">
        <span className="card__codigo">#{String(id).padStart(3, '0')}</span>
        <EstadoBadge estado={estado} />
      </div>

      <h3 className="card__titulo">{titulo}</h3>
      {tipo && <p className="card__tipo">{tipo}</p>}
      {descripcion && <p className="card__descripcion">{descripcion}</p>}

      <dl className="card__meta">
        {estudiante && (
          <div>
            <dt>Estudiante</dt>
            <dd>{estudiante}</dd>
          </div>
        )}
        <div>
          <dt>Fecha</dt>
          <dd>{formatearFecha(fecha)}</dd>
        </div>
      </dl>
        {(estado === 'Pendiente' || estado === 'En revisión') && (
        <div className="card__acciones" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button
            type="button"
            className="btn btn--aprobar"
            onClick={() => actualizarEstado(id, 'Aprobada')}
          >
            Aprobar
          </button>
          <button
            type="button"
            className="btn btn--rechazar"
            onClick={() => actualizarEstado(id, 'Rechazada')}
          >
            Rechazar
          </button>
        </div>
      )}  
    </article>
  )
}

export default SolicitudCard
