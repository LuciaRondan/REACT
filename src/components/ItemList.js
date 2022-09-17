import React from "react"
import  Item  from "./Item"

const ItemList = ({items}) => {
     return (
        <div>
            {
                items.length ? (
                items.map ( (item) => <Item key={item.id} {...item}/>)
                ) : (
                <h2> Cargando...</h2>
                )
            }   
        </div>
     )
}
export default ItemList