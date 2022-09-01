import './App.css';
import Contador from './components/Contador'
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';

function App() {
  return (
    <div className="App">
      <h1>Titulo inicial</h1>
      <Contador></Contador>

      <Listado></Listado>

      <Temperatura></Temperatura>
    </div>
  );
}

export default App;
