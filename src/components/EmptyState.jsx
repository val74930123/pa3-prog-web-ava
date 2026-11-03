import './EmptyState.css'

/**
 * Mensaje cuando ninguna solicitud coincide con los filtros.
 * Props:
 *  - onLimpiarFiltros: (opcional) si se envía, muestra un botón para limpiar
 */
function EmptyState({ onLimpiarFiltros }) {
  return (
    <div className="vacio">
      <span className="vacio__icono" aria-hidden="true">📭</span>
      <h3>No se encontraron solicitudes</h3>
      <p>Prueba con otro término de búsqueda o cambia los filtros.</p>
      {onLimpiarFiltros && (
        <button type="button" onClick={onLimpiarFiltros}>
          Limpiar filtros
        </button>
      )}
    </div>
  )
}

export default EmptyState
