import React from "react"

const Item = ({title, img, price}) => {
    return (
       <article>
         <h3>{title}</h3>
         <h3>{price}</h3>
         <h3>{img}</h3>
       </article>
    )
}
export default Item