import React from "react"
import { useState } from "react";

const Contador = () => {
    const [counter, setCounter] = useState(0) 
    const handleClickSuma =() => {
        setCounter (counter + 1);
    }
    const handleClickResta = () =>{
        setCounter (counter - 1)
    }
    return (
        <div>
            <p>Contador:{counter}</p>
            <button onClick= {handleClickSuma} className= 'btn'> + </button>
            <button onClick= {handleClickResta} className= 'btn'> - </button>
        </div>
    )
}
export default Contador