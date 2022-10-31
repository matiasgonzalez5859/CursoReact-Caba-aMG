import React from 'react'
import Item from './Item'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <Item 
         imgurl="/img/Braford-.jpg"
         title="Braford" 
         price= {100} />
        <Item imgurl="/img/shorton.jpg"  title="Vaquillonas Shorton" price= {100} />
        <Item imgurl="/img/holanda.jpg" title="Vaquillonas Holandas" price= {100} />
    </div>
  )
}

export default ItemListContainer
