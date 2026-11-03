import './FilterBar.css'

/**
 * Barra de búsqueda y filtros.
 * Es un componente CONTROLADO: no guarda estado propio. El estado (useState)
 * y la lógica de filtrado viven en los Hooks de la compañera; este componente
 * solo muestra los valores y avisa de los cambios mediante callbacks.
 *
 * Props:
 *  - busqueda: string                      - onBusquedaChange(valor)
 *  - estado: string ('' = todos)           - onEstadoChange(valor)
 *  - tipo: string ('' = todos)             - onTipoChange(valor)
 *  - estados: string[]  (opciones del select de estado)
 *  - tipos: string[]    (opciones del select de tipo)
 *  - onLimpiar: () => void
 */
function FilterBar({
  busqueda,
  onBusquedaChange,
  estado,
  onEstadoChange,
  tipo,
  onTipoChange,
  estados = [],
  tipos = [],
  onLimpiar,
}) {
  return (
    <form className="filtros" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="filtros__campo filtros__campo--busqueda">
        <label htmlFor="filtro-busqueda">Buscar</label>
        <input
          id="filtro-busqueda"
          type="search"
          placeholder="Buscar por título, tipo o estado…"
          value={busqueda}
          onChange={(e) => onBusquedaChange(e.target.value)}
        />
      </div>

      <div className="filtros__campo">
        <label htmlFor="filtro-estado">Estado</label>
        <select
          id="filtro-estado"
          value={estado}
          onChange={(e) => onEstadoChange(e.target.value)}
        >
          <option value="">Todos</option>
          {estados.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div className="filtros__campo">
        <label htmlFor="filtro-tipo">Tipo de solicitud</label>
        <select
          id="filtro-tipo"
          value={tipo}
          onChange={(e) => onTipoChange(e.target.value)}
        >
          <option value="">Todos</option>
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <button type="button" className="filtros__limpiar" onClick={onLimpiar}>
        Limpiar filtros
      </button>
    </form>
  )
}

export default FilterBar
