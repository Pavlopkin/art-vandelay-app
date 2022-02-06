import Navbar from './components/Navbar.js';

import './App.css';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
   
  return (
    <>
      <Navbar /> 
      <ItemListContainer greeting="este es el ItemListContainer"/>
    </>
      
    
  ); 
}

export default App;
