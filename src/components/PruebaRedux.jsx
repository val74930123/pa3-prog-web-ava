import { useSelector, useDispatch } from 'react-redux';
import { agregarSolicitud } from '../redux/solicitudesSlice';

export default function PruebaRedux() {
    const solicitudes = useSelector((state) => state.solicitudes);
    const dispatch = useDispatch();

    const agregar = () => {
        const nuevaSolicitud = {
            id: 9,
            titulo: "Solicitud de prueba Redux",
            tipo: "Tramite",
            estado: "Pendiente",
            fecha: "2026-11-02"
        };

        dispatch(agregarSolicitud(nuevaSolicitud));
    };

    return (
        <section>
            <h2>Demostración Redux</h2>

            <p>Total de solicitudes: {solicitudes.length}</p>

            <button onClick={agregar}>
                Agregar solicitud de prueba
            </button>

            <h3>Solicitudes almacenadas en Redux</h3>

            <ul>
    {solicitudes.map((solicitud) => (
        <li key={solicitud.id}>
            <strong>{solicitud.titulo}</strong> | Tipo: {solicitud.tipo} | Estado: {solicitud.estado} | Fecha: {solicitud.fecha}
        </li>
    ))}
</ul>
        </section>
    );
}