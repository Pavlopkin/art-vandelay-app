import {Link} from 'react-router-dom';
const Item = (props) => {

    return (
     
            <div className="Producto">
                <img src={props.thumbnail} alt={props.title} />
                <div className="datosProducto">
                <h3>{props.title}</h3>
                 
                    <Link className="estiloEnlace" to={`/item/${props.id}`}>Ver más</Link>
                </div>
            </div>
    );
}

export default Item;