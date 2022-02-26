
import imagen from '../assets/carrito.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext);
    return (
        <div className='cart'>
            <Link to='/Cart'><img className="carrito" src={imagen} alt="foto"/></Link>
            {
            totalCantidad() !== 0 &&
            <p>{totalCantidad()}</p>
            }
        </div> 
    );
}

export default CartWidget;