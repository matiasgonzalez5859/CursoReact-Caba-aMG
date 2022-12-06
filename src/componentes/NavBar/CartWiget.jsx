import React, { useContext } from "react";
import { cartContext } from "../../Context/cartContext";


function CartWidget() {
 
 const miContext = useContext(cartContext);

  return (
    <>
     <h1>🛒</h1>
     <span style={{ color: "white" }}>{miContext.itemsInCart()}</span>
    </>
  );
}

export default CartWidget;