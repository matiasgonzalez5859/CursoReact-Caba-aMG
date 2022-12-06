import { useState, useEffect,} from "react";
import "./ItemList.css";
import getItems from "../Data/Services/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../componentes/Loaders/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState(null);
 
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
    return () => {
      console.log("Componente desmontado");
    };
  }, [idCategory]);

  
  return (
    <div className="catalogo">
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainer;