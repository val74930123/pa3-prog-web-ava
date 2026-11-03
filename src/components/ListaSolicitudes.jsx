import { useEffect, useState } from 'react'
import { solicitudes as datosLocales } from '../data/solicitudes.js'
import StatsSummary from './StatsSummary.jsx'
import FilterBar from './FilterBar.jsx'
import SolicitudList from './SolicitudList.jsx'
import LoadingState from './LoadingState.jsx'
import '../styles/global.css'

/**
 * Vista de solicitudes (ruta /solicitudes).
 *
 * Aquí se conectan los datos y los Hooks con los componentes visuales:
 *  - useState + useEffect: carga simulada de los datos locales.
 *  - useState: filtros de búsqueda, estado y tipo.
 *  - Las solicitudes filtradas se calculan durante el render (no necesitan
 *    estado propio) y se pasan por props a los componentes presentacionales.
 */
const FILTROS_INICIALES = { busqueda: '', estado: '', tipo: '' }

export default function ListaSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [filtros, setFiltros] = useState(FILTROS_INICIALES)

  // Simula la carga de datos (sin API): useEffect + setTimeout.
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setSolicitudes(datosLocales)
      setCargando(false)
    }, 600)

    return () => clearTimeout(temporizador)
  }, [])

  const cambiarFiltro = (campo) => (valor) =>
    setFiltros((previos) => ({ ...previos, [campo]: valor }))

  const limpiarFiltros = () => setFiltros(FILTROS_INICIALES)

  if (cargando) {
    return (
      <section className="solicitudes">
        <LoadingState />
      </section>
    )
  }

  // Opciones de los selects, tomadas de los propios datos.
  const estados = [...new Set(solicitudes.map((s) => s.estado))]
  const tipos = [...new Set(solicitudes.map((s) => s.tipo))]

  // Filtrado (búsqueda de texto + estado + tipo).
  const texto = filtros.busqueda.trim().toLowerCase()
  const filtradas = solicitudes.filter((s) => {
    const contenido = [s.titulo, s.tipo, s.estado, s.estudiante, s.descripcion]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return (
      (!texto || contenido.includes(texto)) &&
      (!filtros.estado || s.estado === filtros.estado) &&
      (!filtros.tipo || s.tipo === filtros.tipo)
    )
  })

  return (
    <section className="solicitudes">
      <h2 className="solicitudes__titulo">Solicitudes académicas</h2>

      <StatsSummary solicitudes={solicitudes} estados={estados} />

      <FilterBar
        busqueda={filtros.busqueda}
        onBusquedaChange={cambiarFiltro('busqueda')}
        estado={filtros.estado}
        onEstadoChange={cambiarFiltro('estado')}
        tipo={filtros.tipo}
        onTipoChange={cambiarFiltro('tipo')}
        estados={estados}
        tipos={tipos}
        onLimpiar={limpiarFiltros}
      />

      <p className="solicitudes__resultados">
        Mostrando {filtradas.length} de {solicitudes.length} solicitudes
      </p>

      <SolicitudList solicitudes={filtradas} onLimpiarFiltros={limpiarFiltros} />
    </section>
  )
}
