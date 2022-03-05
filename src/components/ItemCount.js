import { useState } from 'react';

const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(0); 

    const increment = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1);
        }
    }
    const decrease = () => {
        if(cantidad > inicial){
            setCantidad(cantidad-1);
        }
    }
    return (
        <>
            <div className="contador">
                <div className="botonera">
                    <button className="btnSign" onClick={decrease}>-</button>
                    <p>{cantidad}</p>
                    <button className="btnSign" onClick={increment}>+</button>
                </div>
                <button onClick={() => onAdd(cantidad)} className={cantidad !== 0 ? 'btnAgregar' : 'none'}>Agregar al carrito</button>
            </div>
        </>
    );
}
export default ItemCount;