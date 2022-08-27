import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListcontainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container'>
       <NavBar></NavBar>
       <ItemListcontainer greeting={'Saludos'}></ItemListcontainer>
    </div>
  );
}

export default App;
