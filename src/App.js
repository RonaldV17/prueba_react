import React from 'react';
import MiApi from './components/MiApi';

function App() {
  return (
    <div>
      <div class="home">
        <div class="title">
          <h1>Mis Medicamentos</h1>
        </div>
        <div class="img">
          <h2>El mejor portal para comparar y ahorrar</h2>
        </div>
      </div>
      <div class="contenido">
        <MiApi />
      </div>
      <div class="footer">
        <div class="text">
          <h4>Todos los derechos reservados</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
