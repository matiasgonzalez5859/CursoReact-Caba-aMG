import React from 'react';
import MyButton from '../componentes/MyButton/Mybutton';
import "./item.css"
import { Link } from "react-router-dom";


function Item({ title, imgurl, price, color, id }) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card_detail">
        <h3>{title}</h3>
        <h4 className="priceTag">$ {price}</h4>
      </div>

      <Link to={urlDetail}>
        <MyButton onTouchButton={() => console.log("click")} color={color}>
          Ver más
        </MyButton>
      </Link>
    </div>
  );
}

export default Item;