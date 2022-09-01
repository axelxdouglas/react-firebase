import './App.css';
import Contador from './components/Contador'
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App mt-5">
      <h1>Titulo inicial</h1>
      <Contador></Contador>

      <Listado></Listado>

      <Temperatura></Temperatura>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
