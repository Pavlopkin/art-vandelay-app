import { Link } from 'react-router-dom';

const ButtonCart = () => {
    return (
        <>
            <Link style={{ textDecoration: "none" }} to='/cart'><button className='btnAgregar'>Ver carrito</button></Link>
        </>
    );
}

export default ButtonCart;