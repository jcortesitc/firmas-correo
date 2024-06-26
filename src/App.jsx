import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0);

  // Define la función actualizarDatos
  const actualizarDatos = () => {
    // Lógica para generar firma
    console.log('Generar Firma');
  };

  return (
    <>
      <div id="formularioDatos" className="formulario">
        <label htmlFor="nombreInput">Nombre:</label>
        <input type="text" id="nombreInput" placeholder="Nombre Apellido" />
       
        <label htmlFor="telefonoInput">Teléfono:</label>
        <input type="text" id="telefonoInput" placeholder="+56 9 0000 0000" />
       
        <label htmlFor="cargoInput">Cargo:</label>
        <select id="cargoInput">
          <option value="Operador De Servicios NOC">Operador De Servicios NOC</option>
          <option value="Administrador De Base De Datos Servicios NOC">Administrador De Base De Datos Servicios NOC</option>
          <option value="Call Dispatcher De Servicios NOC">Call Dispatcher De Servicios NOC</option>
          <option value="Tiquet Manager MDS">Tiquet Manager MDS</option>
          <option value="Supervisor De Servicios NOC">Supervisor De Servicios NOC</option>
          <option value="Supervisor De Servicios MDS">Supervisor De Servicios MDS</option>
          <option value="Jefe De Servicios NOC">Jefe De Servicios NOC</option>
          <option value="Jefe De Servicios MDS">Jefe De Servicios MDS</option>
          <option value="Asistente De Contabilidad">Asistente De Contabilidad</option>
          <option value="Asistente De Recursos Humanos">Asistente De Recursos Humanos</option>
          <option value="Key Account Manager">Key Account Manager</option>
          <option value="Técnico Soporte N1 MDS">Técnico Soporte N1 MDS</option>
          <option value="Técnico Soporte N2 MDS">Técnico Soporte N2 MDS</option>
          <option value="Especialista En Inteligencia Artificial">Especialista En Inteligencia Artificial</option>
          <option value="Especialista En Seguridad De La Información">Especialista En Seguridad De La Información</option>
          <option value="Especialista En Virtualización">Especialista En Virtualización</option>
          <option value="Especialista Cloud">Especialista Cloud</option>
          <option value="Especialista DevOps">Especialista DevOps</option>
          <option value="Especialista Desarrollo Web">Especialista Desarrollo Web</option>
          <option value="Especialista Diseño Web">Especialista Desarrollo Web</option>
          <option value="Especialista En Ciencia De Datos">Especialista En Ciencia De Datos</option>
          <option value="Consultor TI">Consultor TI</option>
          <option value="Consultor ERP">Consultor ERP</option>
          <option value="Ingeniero De Software">Ingeniero De Software</option>
          <option value="Ingeniero En Telecomunicaciones">Ingeniero En Telecomunicaciones</option>
          <option value="Ingeniero En Redes">Ingeniero En Redes</option>
          <option value="Ingeniero De Procesos">Ingeniero De Procesos</option>
          <option value="Ingeniero Arquitecto De Software">Ingeniero Arquitecto De Software</option>
          <option value="Ingeniero QA MDS">Ingeniero QA MDS</option>
          <option value="Analista De Sistemas">Analista De Sistemas</option>
          <option value="Administrador De Sistemas">Administrador De Sistemas</option>
          <option value="Administrador De Base De Datos">Administrador De Base De Datos</option>
          <option value="Jefe De Operaciones">Jefe De Operaciones</option>
          <option value="Jefe Proyectos TI">Jefe Proyectos TI</option>
          <option value="Jefe De Logística Y Servicios Generales">Jefe De Logística Y Servicios Generales</option>
          <option value="Gerente De Operaciones">Gerente De Operaciones</option>
          <option value="Gerente Comercial">Gerente Comercial</option>
          <option value="Gerente Marketing Y Relaciones Públicas">Gerente Marketing Y Relaciones Públicas</option>
          <option value="Gerente Administración Y Finanzas">Gerente Administración Y Finanzas</option>
          <option value="Gerente De Desarrollo Organizacional">Gerente De Desarrollo Organizacional</option>
          <option value="CEO">CEO</option>
        </select>
        <button onClick={actualizarDatos}>Generar Firma</button>
      </div>
    </>
  );
}

export default App;