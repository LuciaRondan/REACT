import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListcontainer from './components/ItemListContainer';

function App() {
  const [counter, setCounter] = useState(0) 
  const handleClickSuma =() => {
  setCounter (counter + 1);
  }
  const handleClickResta = () =>{
    setCounter (counter - 1)
  }

  return (
    <div className='container'>
       <NavBar></NavBar>
       <ItemListcontainer></ItemListcontainer>
       <p>Contador:{counter}</p>
       <button onClick= {handleClickSuma} className= 'btn'> + </button>
       <button onClick= {handleClickResta} className= 'btn'> - </button>
    </div>
    
  );
}

export default App;
