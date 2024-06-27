import React, { useState } from 'react';
import { toPng } from 'html-to-image';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cargo, setCargo] = useState('');
  const [mostrarFirma, setMostrarFirma] = useState(false);

  const actualizarDatos = () => {
    setMostrarFirma(true);
  };

  const descargarFirma = () => {
    const firmaElement = document.getElementById('firma');
    const scale = 30;

    const options = {
      width: firmaElement.clientWidth * scale,
      height: firmaElement.clientHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${firmaElement.clientWidth}px`,
        height: `${firmaElement.clientHeight}px`
      },
      quality: 1,
    };

    toPng(firmaElement, options)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'firma.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Error al generar la imagen:', error);
      });
  };

  return (
    <div>
      {!mostrarFirma ? (
        <div id="formularioDatos" className="formulario">
          <label htmlFor="nombreInput">Nombre:</label>
          <input
            type="text"
            id="nombreInput"
            placeholder="Nombre Apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="telefonoInput">Teléfono:</label>
          <input
            type="text"
            id="telefonoInput"
            placeholder="+56 9 0000 0000"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <label htmlFor="cargoInput">Cargo:</label>
          <select
            id="cargoInput"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          >
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
      ) : (
        <div>
          <footer id="firma" className="firma">
            <div className="logo">
              <img src="https://i.postimg.cc/wjZSyh7n/ITConsultants-Pie-de-firma-1.png" alt="Logo ITConsultants" />
            </div>
            <div className="informacion">
              <p id="nombre"><strong>{nombre}</strong></p>
              <p id="telefono">{telefono}</p>
              <p id="cargo"><strong>{cargo}</strong></p>
              <img src="https://i.postimg.cc/RCTZtRNg/qr-code.png" className="codigo-qr" alt="Código QR" />
            </div>
            <div className="confidencialidad">
              Este mensaje y cualquier archivo adjunto están dirigidos exclusivamente al destinatario y pueden contener información confidencial sujeta a secreto profesional. No está permitido su copia o distribución por cualquier medio sin la autorización expresa del remitente. Si usted no es el destinatario final, por favor elimine el mensaje y notifique al remitente.
            </div>

          </footer>
          <div className="botonFirma">
            <button onClick={descargarFirma}>Descargar Firma</button>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
