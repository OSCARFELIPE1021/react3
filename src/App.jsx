import NavBar from '../src/componentes/NavBar/navbar';
import  Card from './componentes/Card/Card'
import ItemListConteiner from './componentes/ItemListContainer/IntemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      
        <div className="App">
        <Card/>
        <ItemListConteiner texto="esteban"/>
        
          
        </div>
    </>
  );
}

export default App;
