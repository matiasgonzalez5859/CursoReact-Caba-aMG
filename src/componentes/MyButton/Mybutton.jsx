import "./Mybutton.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.colorBtn);

  function handleClick() {
    setColorBtn("#555");
    
  }

  return (
    <button
      onClick={props.onTouchButton}
      style={{ backgroundColor: colorBtn, marginBotton: "10px" }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;