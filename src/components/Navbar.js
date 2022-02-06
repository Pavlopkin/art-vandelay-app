import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="Logo">
                    <a className="menuHome" href="#">
                        <div className="menuOvalo">
                            <p className="menuText"><span className="menuTextespecial">A</span>rt <span className="menuTextespecial">V</span>andelay</p>
                        </div>
                    </a>
            </div>
            <ul className="enlaces">
                <li>Home</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <div className="icono">
                <a>Register</a>
                <a>Sig in</a>
                <CartWidget />
            </div>
        </div> 
        
        
    );
}

export default Navbar;