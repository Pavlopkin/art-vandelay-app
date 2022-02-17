import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';



function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:idCategory" element={<ItemList/>} />
      </Routes>
      </BrowserRouter>
  ); 
}

export default App;
