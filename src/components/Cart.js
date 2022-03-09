import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { serverTimestamp, setDoc, collection, doc, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import swal from 'sweetalert';

const Cart = ( ) => {
    const test = useContext(CartContext);
    const {deleteFromCart, refreshCart, totalPorProducto, totalCarrito, totalCantidad, calculaIva, totalCompra} = useContext(CartContext);
    let EnvioGratis = 50000;
   
    
    const createOrder = () => {
        let order = {
            buyer: {
                mail: "bsacamano@gmail.com",
                name: "Bob Sacamano",
                phone: "KL5-6893",
            },
            date: serverTimestamp(),
            item: test.cartList.map( (item) => {return {
                id: item.id, 
                price: item.price, 
                title: item.title,
                cantidad: item.cantidadItem,
            }}),
            total: totalCompra(),
        }
        console.log(order);

        /*const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        } /*
        /*const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef; 
        } */

        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            try {
                return newOrderRef;
            } catch (error) {
                console.log(error);
            }
        }

        


        createOrderFirestore()
            .then(result => { 
            /*alert('se ha creado la orden:' + result.id); */
            const mostrarAlerta = () => {
                swal({
                    title: "Su compra se ha realizado con éxito",
                    text: `Orden: ${result.id}`,
                    icon: "success",
                    button: "confirmar",
                    timer: 5000,
                })
            }
            mostrarAlerta();
            test.cartList.map(async (item) => {
                const itemRef = doc(db, "avdata", item.id);
                await updateDoc(itemRef, {
                    stock: increment(-item.cantidadItem)
                })
            })
            test.eliminaCarrito();})
            .catch(error => console.log(error)); 
    }    

    return(
        <>
            <h1 className='tituloCart'>SU COMPRA</h1>
            {
            //CARRITO VACIO//    
            test.cartList.length === 0 ?
                <div>
                    <h2 className='emptyTitle'>No hay productos en el carrito</h2>
                    <div className='emptyCar'>
                        <img src="https://pavlopkin.github.io/Art-Vandelay/assets/portada.png" alt="imagen productos varios"/>
                        <Link to='/' style={{ textDecoration: "none", color: "white" }}><button className='textoLink'>Seguir comprando</button></Link>
                    </div>
                </div>
                //CARRITO CON PRODUCTOS//
                :<div className='cartContainer'>
                    <div className='botoneraCart'>
                    <Link to='/'><button className='btnAgregar'>Seguir comprando</button></Link>
                    <button className='btnAgregar' onClick={() => refreshCart()}>Limpiar carrito</button>
                    </div>
                    <div className='cartLeft' >
                    {
                        test.cartList.map(item => (       
                            <div className='productoCart' key={item.id} >
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
                        //RESUMEN DEL PEDIDO//    
                    } 
                    </div>
                    <div className='cartRigth'>
                        <h3>DETALLE DEL PEDIDO</h3>
                        <p>Cantidad de productos: {totalCantidad()} </p><hr/>
                        {
                        test.cartList.map(item => (       
                            <div key={item.id}>
                                <p>{item.title} x {item.cantidadItem}</p>
                            </div>
                        ))
                        }
                        <p>Subtotal: $ {totalCarrito()}</p>
                        <p>IVA (21%): $ {calculaIva()}</p><hr/>
                        <p className='totalCarrito'>TOTAL: $ {totalCompra()} </p>
                        <button onClick={createOrder}>CONFIRMAR COMPRA</button>
                    </div> 
                    {
                        //BANNER ENVIOS GRATIS//
                    totalCompra() > EnvioGratis &&
                    <div className='envioGratis' key="1000"> 
                        <h4>Envío gratis en compras superiores a $ {EnvioGratis}!!</h4>
                        <img src="https://i.gifer.com/32x8.gif" alt="camión logística"/>     
                    </div>
                    }
                </div>      
            }   
        </>
    );
}
export default Cart;
