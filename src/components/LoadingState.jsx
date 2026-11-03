import './LoadingState.css'

/**
 * Indicador de carga. Se muestra mientras el Hook de datos (useEffect)
 * simula la carga de solicitudes.
 */
function LoadingState({ mensaje = 'Cargando solicitudes…' }) {
  return (
    <div className="carga" role="status" aria-live="polite">
      <span className="carga__spinner" aria-hidden="true" />
      <p>{mensaje}</p>
    </div>
  )
}

export default LoadingState
