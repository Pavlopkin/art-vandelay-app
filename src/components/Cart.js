import { useContext } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {
    const test = useContext(CartContext);
    const {deleteFromCart, refreshCart} = useContext(CartContext);
    console.log("este es el test", test)
    return(
    <>
        <button className="btnClean" onClick={() => refreshCart()}>Limpiar carrito</button>
        <div>
        {
                
               test.cartList.map(item => (
                <div className='productoCart' key={item.id}>
                
                <div className='cajaCart'>
                        <img src={item.thumbnail} alt={item.title}/>
                        <div className='datosCart'>
                            <h4>{item.title}</h4>
                            <p>Precio {item.price}</p>
                            <p>Cantidad {item.cantidad} </p>
                            <button onClick={() => deleteFromCart(item.id)} >eliminar</button>
                        </div>
                </div> 
            </div>))
        }         
        </div>    
        </>
    );
}

export default Cart;
