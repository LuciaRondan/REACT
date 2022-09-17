import React from "react"

const Item = ({title, img, price}) => {
    return (
       <article>
         <h3>{title}</h3>
         <h3>{price}</h3>
         <img src={img} style={{with: "5rem"}}></img>
       </article>
    )
}
export default Item