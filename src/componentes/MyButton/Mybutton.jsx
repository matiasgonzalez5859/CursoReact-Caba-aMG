import "./Mybutton.css";
import React, { useState, useEffect } from "react";

/* .................................................... */
function getDataFromDatabase() {
  console.log("%cdata from database", "color: lightblue");
}
/* .................................................... */

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.color);

  console.log("%cRender del componente", "color: pink");

  useEffect(
    () => {
      console.log("Component mounting");
    }, 
  []);

  function handleClick() {
    setColorBtn("grey");
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: colorBtn, marginBotton: "10px" }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;
