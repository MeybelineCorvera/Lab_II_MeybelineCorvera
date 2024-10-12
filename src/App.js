import React from 'react';
import './App.css';
import Header from './Componentes/Encabezado.jsx';
import Formulario from './Componentes/Form.jsx';
import Contador from './Componentes/Counter.jsx';
import Saludo from './Componentes/UserGreeting.jsx';

// Componente principal con JSX
function App() {
  return (
    <div className="App">
      <Header />
      <Saludo nombre="Estudiante" />
      <Contador />
      <Formulario />
    </div>
  );
}

export default App;

