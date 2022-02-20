import { Link } from 'react-router-dom';

const BotonCart = () => {

    
    return (
        <>
            <Link style={{ textDecoration: "none" }} to='/cart'><button className='btnAgregar'>Agregar al Carrito</button></Link>
         
          
        </>
    );
}

export default BotonCart;