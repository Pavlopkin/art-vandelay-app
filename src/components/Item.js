const Item = (props) => {


    return (
            <div className="Producto">
                <img src={props.thumbnail} alt={props.title} />
                <div className="datosProducto">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <h4>Precio: {props.price}</h4>
                </div>
            </div>
    );
}

export default Item;