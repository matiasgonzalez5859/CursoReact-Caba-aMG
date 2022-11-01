import React from 'react'
import Item from './Item'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <Item imgurl="/img/Braford-.jpg" title="Braford" price= {100} color="fireback" />
        <Item imgurl="/img/shorton.jpg"  title="Vaquillonas Shorton" price= {100} color="purple" />
        <Item imgurl="/img/holanda.jpg" title="Vaquillonas Holandas" price= {100} color="darkgreen" />
    </div>
  )
}

export default ItemListContainer
