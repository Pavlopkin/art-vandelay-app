
import imagen from '../assets/carrito.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
////////INOCO DEL CARRITO///////////////////////////
const CartWidget = () => {
    const {totalQty} = useContext(CartContext);
    return (
        <div className='cart'>
            <Link to='/Cart'><img className="carrito" src={imagen} alt="foto"/></Link>
            {
            totalQty() !== 0 &&
            /*Indica la cantidad de productos en el carrito*/
            <p>{totalQty()}</p>
            }
        </div> 
    );
}
export default CartWidget;