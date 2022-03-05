import { Link } from 'react-router-dom';

const BotonCart = () => {
    return (
        <>
            <Link style={{ textDecoration: "none" }} to='/cart'><button className='btnAgregar'>Ver carrito</button></Link>
        </>
    );
}

export default BotonCart;