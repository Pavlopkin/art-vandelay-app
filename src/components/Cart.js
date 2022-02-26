import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


const Cart = ( ) => {
    const test = useContext(CartContext);
    const {deleteFromCart, refreshCart, totalPorProducto, totalCarrito, totalCantidad, calculaIva, totalCompra} = useContext(CartContext);
  
    return(
        <>
            <h1 className='tituloCart'>SU COMPRA</h1>
            {
            test.cartList.length === 0 ?
                <div>
                    <h2 className='emptyTitle'>No hay productos en el carrito</h2>
                    <div className='emptyCar'>
                        <img src="https://pavlopkin.github.io/Art-Vandelay/assets/portada.png" alt="imagen productos varios"/>
                        <Link to='/' style={{ textDecoration: "none", color: "white" }}><button className='textoLink'>Seguir comprando</button></Link>
                    </div>
                </div>
                :<div className='cartContainer'>
                    <div className='botoneraCart'>
                    <Link to='/'><button className='btnAgregar'>Seguir comprando</button></Link>
                    <button className='btnAgregar' onClick={() => refreshCart()}>Limpiar carrito</button>
                    </div>
                    <div className='cartLeft'>
                    {
                        test.cartList.map(item => (       
                            <div className='productoCart' key={item.id}>
                                <div className='cajaCart'>
                                    <h3>{item.title}</h3>
                                    <img src={item.thumbnail} alt={item.title}/>
                                </div>
                                <div className='datosCart'>
                                            <p>{item.cantidadItem} unidades</p>
                                            <p>Precio ${item.price} c/ul</p><hr/>
                                            <p className='subtotalCarrito'>Subtotal Producto: ${totalPorProducto(item.id)}</p>
                                            <button onClick={() => deleteFromCart(item.id)} >eliminar</button>
                                </div>
                            </div>
                        ))
                    } 
                    </div>
                    <div className='cartRigth'>
                        <h3>DETALLE DEL PEDIDO</h3>
                        <p>Cantidad de productos: {totalCantidad()} </p><hr/>
                        {
                        test.cartList.map(item => (   
                            <>
                            <div key={item.id}>
                                <p>{item.title} x {item.cantidadItem}</p>
            
                               
                            </div>
                                
                           </>    
                        ))
                    }
                        <p>Subtotal: $ {totalCarrito()}</p>
                        <p>IVA (21%): $ {calculaIva()}</p><hr/>
                        <p className='totalCarrito'>TOTAL: $ {totalCompra()} </p>
                    </div>        
                </div>      
            }   
        </>
    );
}

export default Cart;
