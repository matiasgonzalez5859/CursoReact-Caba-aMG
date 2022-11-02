import React from 'react';
import MyButton from '../componentes/MyButton/Mybutton';
import "./item.css"


function Item({ title, imgurl, price, color }) {
  return (
    
     <div className="card">
      
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <MyButton color={color}>Ver mas</MyButton>
       
       

    </div>
  )
}

export default Item