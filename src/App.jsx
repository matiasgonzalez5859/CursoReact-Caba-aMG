
import './App.css';
import ItemListContainer from './ItemList/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:idCategory" element={<ItemListContainer />} />

          <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;