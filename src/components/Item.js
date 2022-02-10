import ItemCount from "./ItemCount";

const Productos = (props) => {
    return (
            <div className="Producto">
                <img src={props.thumbnail} alt={props.title} />
                <div className="datosProducto">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <h4>Precio: {props.price}</h4>
                </div>
                <ItemCount stock="5" inicial="1"/>
            </div>

    );
}

export default Productos;