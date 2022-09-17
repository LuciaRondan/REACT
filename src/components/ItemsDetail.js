import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import itemsJson from "../myItems.json"
import Item from "./Item"

const ItemsDetail = () => {
  
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const getItem = (id) => {
        for(var i = 0; i < itemsJson.length; i++){
            if(itemsJson[i].id == id){
                return itemsJson[i];
            }
        }
    }

    useEffect(()=> {
        const res = getItem(id)
        setProduct(res)
    }, []);


    return (
    <Item {...product}/>
    )
}
export default ItemsDetail