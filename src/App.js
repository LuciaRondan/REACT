import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListcontainer from './components/ItemListContainer';
import Contador from './components/Contador';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemsDetail from './components/ItemsDetail';

function App() {
  
  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element = {<ItemListcontainer></ItemListcontainer>} />
          <Route path='/:id' element = {<ItemsDetail></ItemsDetail>} />
          <Route path='/contador' element = {<Contador></Contador>} />
        </Routes>
       </BrowserRouter>
    </div>
    
  );
}

export default App;
