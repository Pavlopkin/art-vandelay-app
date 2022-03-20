import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
//////BARRA DE NAVEGACIÓN/////////////////////
const Navbar = () => {
    return (
        <div className="navBar">
            <div className="Logo">
                    <Link to='/' className="menuHome">
                        <div className="menuOvalo">
                            <p className="menuText"><span className="menuTextespecial">A</span>rt <span className="menuTextespecial">V</span>andelay</p>
                        </div>
                    </Link>
            </div>
            <ul className="enlaces">
                <Link style={{ textDecoration: "none" }} to='/category/1'><li>Indumentaria</li></Link>
                <Link style={{ textDecoration: "none" }} to='/category/2'><li>Calzado</li></Link>
                <Link style={{ textDecoration: "none" }} to='/category/3'><li>Regalos</li></Link>
            </ul>
            <div className="icono">
                <p>Register</p>
                <p>Sig in</p>
                <CartWidget />
            </div>
        </div> 
    );
}

export default Navbar;