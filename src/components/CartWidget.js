
import imagen from '../assets/carrito.png';


let contador = 5;

const CartWidget = () => {
    return (
        <div className='cart'>
            <img className="carrito" src={imagen} alt="foto"/>
            <p>{contador}</p>
        </div> 
    );
}

export default CartWidget;