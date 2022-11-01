import React from 'react';
import MyButton from '../componentes/Mybutton';
import "./item.css"


function Item(props) {
  return (
    
     <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt={props.title} />
      </div>
      <div className="card-detail">
        <h3>{props.title}</h3>
        <p>${props.price}</p>
      </div>
      <MyButton color={props.color}>Ver mas</MyButton>
       
       

    </div>
  )
}

export default Item