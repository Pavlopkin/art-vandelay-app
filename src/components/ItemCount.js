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
                <div className="botonera">
                    <button className="btnSign" onClick={decrease}>-</button>
                    <p>{Cantidad}</p>
                    <button className="btnSign" onClick={increment}>+</button>
                </div>
                <button className="btnAgregar">Comprar</button>
            </div>
        </>
    );
}

export default ItemCount;