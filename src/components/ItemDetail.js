import ItemCount from '../components/ItemCount';
import { useContext, useState } from 'react';
import ButtonCart from './ButtonCart';
import { CartContext } from './CartContext';
import cargando from '../assets/loading.gif';
import swal from 'sweetalert';
//////////////////RENDERIZACIÓN DEL DETALLE DE CADA PRODUCTO///////////////////////////////////
const ItemDetail = ( {item} ) => {
    const [compra, setCompra] = useState(0);
    const test = useContext(CartContext);

     const onAdd = (cantidad) => {
        if(cantidad !== 0){
        setCompra(cantidad);
        const alertSelection = () => {
            /* utiliza Sweet Alert para mensaje de confirmación*/
            swal({
                title: "Atención",
                text: `Ha seleccionado ${cantidad} productos`,
                icon: "info",
                button: "confirmar",
                timer: 5000,
            })
        }
        alertSelection();
        test.addToCart(item, cantidad);
        }
    }    
    return ( 
        <>
        {
            
            item.length === 0
            ?<div className='loading'>
                <img src={cargando} alt="cargando"/>
            </div>
            :<div>
                <div>
                    <div className='ItemDetail' key={item.id}>
                        <h1>{item.title}</h1>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p>{item.description}</p>
                        <p>Precio: {item.price}</p>
                        <p>Unidades disponibles: {item.stock}</p>
                    </div>
                    {
                        compra === 0   
                    ? <ItemCount stock={item.stock} inicial={compra} onAdd={onAdd} className="itemCount"/>
                    : <ButtonCart />
                    }
                </div>
            </div>
            
        }
        </>
    );
}

export default ItemDetail;