import './estilos.css';
import Navbar from './componentes/Navbar';
import Caratula from './componentes/Caratula';
import Login from './componentes/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Caratula/>
      <Login/>
    </div>
     

  );
}

export default App;
