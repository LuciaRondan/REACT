import { useEffect, useState } from "react";
import itemsJson from "../myItems.json";
import ItemList from "./ItemList";


const ItemListcontainer = () => {
   const {items, setItems} = useState([]);

   const getItems = (data, time) =>
      new Promise((resolve, reject) => {
         console.log([data])
         setTimeout(() => {
            if(data) {
               resolve(data);
            } else {
               reject("error");
            }
         }, time);
      });
   
   useEffect(()=> {
      getItems(itemsJson, 2000)
         .then((res) => {
            setItems(res);
         })
         .catch ((err)=> console.log(err, ": no hay producto"));
   }, []);

   return (
   <div>
      <ItemList items= {items}/>
   </div>
   );
};

export default ItemListcontainer