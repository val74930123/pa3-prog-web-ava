# README — Evaluación

> **Curso:** PROGRAMACION WEB - II  
> **Código:** 30690  
> **Evaluación:** PA3 
> **Equipo:** GRUPO 5

## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| Valeria Ravina Pérez | Datos y lógica (Hooks) | Datos simulados, useState, useEffect, filtros y búsqueda (Act 1) |
| Alejandro Daniel Quispe Nieto | Navegacion entre paginas | Se agrego la pagina de inicio, y se conecto los enlaces para pasar de ella a la lista de solicitudes |
| Rodrigo Arturo Paredes Santa Cruz | Estado global con Context API | Correcto funcionamiento de Context API con Provider, consumers desacoplados |
| Ian Palmieri Gonzaga | Desarrollo de componentes y estructura JSX | Creación e implementación de componentes reutilizables en React mediante JSX, organización de la interfaz y aplicación de estilos para la presentación visual de la aplicación (Actividad 1, parte 2). |
| Alejandro Josue Chero Izaguirre | Desarrollador de estado global (Redux) | Implementación de Redux, configuración del store y slice y comparación técnica entre Redux y Context API. |

## 2. Descripción y objetivo

**Problema:**  
El equipo debe construir una nueva interfaz de usuario para consultar y organizar solicitudes académicas desde una SPA en React. La interfaz debe reaccionar a cambios de datos y estado utilizando los fundamentos propios de React.
**Objetivo:**  
Construir una SPA con React.js que utilice JSX, componentes y los Hooks useState y useEffect, además de navegación con React Router y estado global con Context API y Redux a nivel introductorio.

**Solución desarrollada:**  
Se desarrolló una SPA con React (Vite) para la **Plataforma de Gestión de Solicitudes Académicas**. Se trabajó con datos locales simulados (sin consumo de APIs, que corresponde a la sesión 11). La aplicación se construyó en cuatro etapas sobre el mismo proyecto:
Los datos simulados están en `src/data/solicitudes.js`. La vista `ListaSolicitudes` usa `useState` para controlar el estado de carga y los filtros de búsqueda, estado y tipo, y `useEffect` para simular la carga al abrir la pantalla. Las solicitudes filtradas se calculan en cada render y se pasan por props a componentes reutilizables: `StatsSummary`, `FilterBar`, `SolicitudList`, `SolicitudCard`, `EstadoBadge`, `LoadingState` y `EmptyState`.
Se configuraron las rutas `/` (inicio), `/solicitudes`, `/redux` y una ruta de página no encontrada, con un menú de navegación (`NavLink`) que permite moverse entre vistas sin recargar la página.
Se creó `SolicitudesProvider`, que envuelve la aplicación y guarda de forma global la lista de solicitudes, los contadores por estado y las funciones para registrar una solicitud y cambiar su estado (aprobar o rechazar). Los componentes consumen estos datos con el hook `useSolicitudes`.
Se implementó un flujo básico con Redux Toolkit (store y slice) sobre una necesidad acotada del caso, y se documentó una comparación técnica con Context API.

**Comparación técnica entre Redux y Context API:**
- **Redux:** Permite administrar el estado global mediante un store centralizado, acciones y reducers. En el proyecto se utilizó Redux Toolkit para almacenar las solicitudes académicas y agregar nuevas solicitudes.
- **Context API:** Es una funcionalidad de React que permite compartir información entre componentes mediante createContext, Provider y useContext.
- **Diferencia principal:** Context API permite compartir estados de forma sencilla, mientras que Redux ofrece una estructura más organizada para administrar y actualizar estados globales mediante acciones.

## 3. Cómo ejecutar o revisar

```bash
git clone https://github.com/val74930123/pa3-prog-web-ava.git
cd pa3-prog-web-ava
npm install
npm run dev
```

**Pasos de revisión:**
### Requisitos
- Tener instalado Node.js y npm.

### Instalación y ejecución

```bash
git clone https://github.com/val74930123/pa3-prog-web-ava.git
cd pa3-prog-web-ava
npm install
npm run dev
```

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

Agregar capturas reales y legibles en la carpeta `evidencias/`.

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| Valeria Ravina Pérez | [Alta] | [Alta] | [Alta] | [Sí] |  |
| Alejandro Daniel Quispe Nieto | [Alta] | [Alta] | [Alta] | [Sí] |  |
| Rodrigo Arturo Paredes Santa Cruz | Alta | Alta | Alta | Sí |  |
| [Ian Palmieri Gonzag] | [Alta] | [Alta] | [Alta] | [Sí] | [Si] |
| Alejandro Josue Chero Izaguirre | [Alta] | [Alta] | [Alta] | [Sí] | [Commits, avances, etc.] |

## 6. Video de exposición

**Video público de YouTube:** (https://youtu.be/HJObgLUB-uU?si=yyWAzBkQmH79nuGs)

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el procedimiento, la solución desarrollada y las decisiones tomadas.

## 7. Conclusiones

Componentes y Hooks (Actividad 1): dividir la interfaz en componentes reutilizables (tarjetas, filtros, estadísticas, carga) hizo el código más ordenado y fácil de mantener. useState permitió que la pantalla reaccionara a la búsqueda y a los filtros sin recargar, y useEffect permitió simular la carga de datos al abrir la vista.

React Router (Actividad 2): la navegación entre inicio, solicitudes y la vista de Redux se hace sin recargar la página, que es lo que define a una SPA. Separar la aplicación en rutas también facilitó que cada integrante trabajara una parte distinta.

Context API (Actividad 3): guardar las solicitudes en un estado global evitó pasar los datos de componente en componente. Así, acciones como aprobar o rechazar una solicitud actualizan a la vez la lista y los contadores en toda la pantalla.

Redux y comparación (Actividad 4): al implementar un flujo básico con Redux se vio que exige más estructura (store y acciones) que Context API. Para una aplicación pequeña como esta, Context es más simple y suficiente, mientras que Redux conviene cuando el estado crece y se necesita más control y más facilidad para depurar.

---

**Última actualización:** [03/11/2026]
