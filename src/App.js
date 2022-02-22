import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext.js';



function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemList/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </BrowserRouter>
    </CartContextProvider>
  ); 
}

export default App;
