
import './App.css';
import ItemListContainer from './ItemList/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';






function App() {
  
  
    const styleH3 = { backgroundColor: "darkred", color: "white" };
    let titulo = <h3 style={styleH3}>Bienvenido. todo lo que necesita tu campo en un solo lugar 🌾</h3>;
  
    return (
      <>
        <div className="App">
          <NavBar />
          {titulo}
          <ItemListContainer />
        </div>
      </>
    );
}




export default App;
