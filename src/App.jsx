import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Registro from './Componentes/Registro.jsx';
import Alert from './Componentes/Alert.jsx'
import './App.css';

function App() {
  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <Registro onAlert={addAlert} />
      <Alert alerta={alert} />
    </>
  );
}

export default App;
