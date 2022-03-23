import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { serverTimestamp, setDoc, collection, doc, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import swal from 'sweetalert';

//////////////////////////////////CARRITO//////////////////////////////////////////////////
const Cart = ( ) => {
    const test = useContext(CartContext);
    const {deleteFromCart, refreshCart, totalProduct, totalCart, totalQty, tax, totalPurchase} = useContext(CartContext);
    /*esta variable controla el banner que indica envio gratis*/
    let EnvioGratis = 50000;
    ////////////////////////CREA ORDEN////////////////////////////
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
            total: totalPurchase(),
        }
        ////////////////////////ALMACENA ORDEN EN FIRESTORE////////////////////
        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        } 
        /////////CONFIRMACIÓN DE COMPRA/////////////////////////////
        createOrderFirestore()
            .then(result => { 
            const showAlert = () => {
                /*utiliza sweet alert para confirmar compra*/
                swal({
                    title: "Su compra se ha realizado con éxito",
                    text: `Orden: ${result.id}`,
                    icon: "success",
                    button: "confirmar",
                    timer: 5000,
                })
            }
            showAlert();
            test.cartList.map(async (item) => {
                const itemRef = doc(db, "avdata", item.id);
                await updateDoc(itemRef, {
                    stock: increment(-item.cantidadItem)
                })
            })
            test.cleanCart();})
            .catch(error => console.log(error)); 
    }    
    return(
        <>
            <h1 className='tituloCart'>SU COMPRA</h1>
            {
            test.cartList.length === 0 ?
                 ///////////////INFORMACIÓN EN PANTALLA CUANDO EL CARRITO ESTÁ VACIO/////////////////////    
                <div>
                    <h2 className='emptyTitle'>No hay productos en el carrito</h2>
                    <div className='emptyCar'>
                        <img src="https://pavlopkin.github.io/Art-Vandelay/assets/portada.png" alt="imagen productos varios"/>
                        <Link to='/' style={{ textDecoration: "none", color: "white" }}><button className='textoLink'>Seguir comprando</button></Link>
                    </div>
                </div>
                ////////////////INFORMACIÓN EN PANTALLA CUANDO EL CARRITO TIENE PRODUCTOS//////////
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
                                            <p className='subtotalCarrito'>Subtotal Producto: ${totalProduct(item.id)}</p>
                                            <button onClick={() => deleteFromCart(item.id)} className="btnCart">eliminar</button>
                                </div>
                            </div>
                        ))
                        ////////*RESUMEN DEL PEDIDO*///////// 
                    } 
                    </div>
                    <div className='cartRigth'>
                        <h3>DETALLE DEL PEDIDO</h3>
                        <p>Cantidad de productos: {totalQty()} </p><hr/>
                        {
                        test.cartList.map(item => (       
                            <div key={item.id}>
                                <p>{item.title} x {item.cantidadItem}</p>
                            </div>
                        ))
                        }
                        <p>Subtotal: $ {totalCart()}</p>
                        <p>IVA (21%): $ {tax()}</p><hr/>
                        <p className='totalCarrito'>TOTAL: $ {totalPurchase()} </p>
                        <button className="btnCart" onClick={createOrder}>CONFIRMAR COMPRA</button>
                    </div> 
                    {
                    totalPurchase() > EnvioGratis &&
                    ///////BANNER ENVIO GRATIS (solo visible si la compra es > $50.000.-)//////////
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
