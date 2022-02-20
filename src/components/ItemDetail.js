import ItemCount from '../components/ItemCount';
import { useState } from 'react';
import BotonCart from './BotonCart';

const ItemDetail = ( {item} ) => {
    const [compra, setCompra] = useState(0);

     const onAdd = (cantidad) => {
        if(cantidad !== 0){
        setCompra(cantidad)
        alert("Usted seleccionó " + cantidad + " productos");


        }
    }
    console.log("se agregarán al carrito" +  compra + "unidades");
    
    return ( 
        <>
        {
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
                : <BotonCart/>
                }
            </div>
        }
        </>
    );
}

export default ItemDetail;