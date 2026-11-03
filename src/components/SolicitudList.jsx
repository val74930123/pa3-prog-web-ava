import SolicitudCard from './SolicitudCard.jsx'
import EmptyState from './EmptyState.jsx'
import './SolicitudList.css'
import { useSolicitudes } from '../context/solicitudesContext'

/**
 * Lista (cuadrícula) de solicitudes.
 * Props:
 *  - solicitudes: arreglo de solicitudes (ya filtradas por el Hook de la compañera)
 *  - onLimpiarFiltros: (opcional) función para el botón del estado vacío
 */
function SolicitudList({ solicitudes: solicitudesProp, onLimpiarFiltros }) {

  const { solicitudes: solicitudesContext } = useSolicitudes()

  const listaAMostrar = solicitudesProp || solicitudesContext || []

  if (listaAMostrar.length === 0) {
    return <EmptyState onLimpiarFiltros={onLimpiarFiltros} />
  }

  return (
    <section className="lista" aria-label="Listado de solicitudes">
      {listaAMostrar.map((solicitud) => (
        <SolicitudCard key={solicitud.id} solicitud={solicitud} />
      ))}
    </section>
  )
}

export default SolicitudList