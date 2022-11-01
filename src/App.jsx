
import './App.css';
import ItemListContainer from './ItemList/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';






function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar/>
        <p>
          Bienvenidos a cabaña MG. todo lo que buscas para tu campo
        </p>
      
        
        <ItemListContainer greeting="La genetica que buscas en un solo lugar" />
        
        
        
        
        
      
        
      </header>
    </div>
  );
}




export default App;
