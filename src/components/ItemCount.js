import { useState } from 'react';


const ItemCount = ({stock, inicial}) => {
    const [Cantidad, setCantidad] = useState(1); //hook
    const increment = () => {
        if(Cantidad < stock){
            setCantidad(Cantidad+1);
        }
    }
    const decrease = () => {
        if(Cantidad > inicial){
            setCantidad(Cantidad-1);
        }
    }
    
    return (
        <>
            <div className="contador">
                <h4>Nombre Producto</h4>
                <div className="botonera">
                    <button className="btnSign" onClick={decrease}>-</button>
                    <p>{Cantidad}</p>
                    <button className="btnSign" onClick={increment}>+</button>
                </div>
                <button>agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;