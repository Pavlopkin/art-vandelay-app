const Navbar = () => {
    return (
        <div className="navBar">
            <div className="Logo">
                    <a className="menuHome" href="#">
                        <div class="menuOvalo">
                            <p class="menuText"><span class="menuTextespecial">A</span>rt <span class="menuTextespecial">V</span>andelay</p>
                        </div>
                    </a>
            </div>
            <ul className="enlaces">
                <li>Home</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <div className="icono">

            </div>
        </div> 
        
        
    );
}

export default Navbar;