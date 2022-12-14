import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from'./components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Titulo from './components/Titulo/Titulo'

function App() {
    let tituloApp = 'TAZA TAZA';
    let subtitApp = '¡llevate una a casa!';
  return (
    <div>
      <div>
        <Titulo titulo={tituloApp} subtitulo={subtitApp}/>
      </div>
     <NavBar/>
     <CartWidget/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
