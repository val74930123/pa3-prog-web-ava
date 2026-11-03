import './StatsSummary.css'

/**
 * Resumen con contadores por estado.
 * Props:
 *  - solicitudes: arreglo de solicitudes (se cuentan por estado)
 *  - estados: (opcional) lista de estados a mostrar; por defecto los 4 habituales
 *
 * El conteo es un cálculo derivado de las props, por lo que no necesita
 * estado propio.
 */
const ESTADOS_POR_DEFECTO = ['Pendiente', 'En revisión', 'Aprobada', 'Rechazada']

function claseDeEstado(estado) {
  switch (estado) {
    case 'Pendiente':
      return 'stats__item--pendiente'
    case 'En revisión':
      return 'stats__item--revision'
    case 'Aprobada':
      return 'stats__item--aprobada'
    case 'Rechazada':
      return 'stats__item--rechazada'
    default:
      return 'stats__item--total'
  }
}

function StatsSummary({ solicitudes = [], estados = ESTADOS_POR_DEFECTO }) {
  return (
    <section className="stats" aria-label="Resumen de solicitudes">
      <div className="stats__item stats__item--total">
        <span className="stats__numero">{solicitudes.length}</span>
        <span className="stats__etiqueta">Total</span>
      </div>

      {estados.map((nombre) => (
        <div key={nombre} className={`stats__item ${claseDeEstado(nombre)}`}>
          <span className="stats__numero">
            {solicitudes.filter((s) => s.estado === nombre).length}
          </span>
          <span className="stats__etiqueta">{nombre}</span>
        </div>
      ))}
    </section>
  )
}

export default StatsSummary
