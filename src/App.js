import Navbar from './components/Navbar.js';

import './App.css';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
   
  return (
    <>
      <Navbar /> 
      <ItemListContainer greeting="Conozca nuestros productos"/>
    </>  
  ); 
}

export default App;
