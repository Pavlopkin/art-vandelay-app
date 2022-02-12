import ItemCount from "./ItemCount";

const Item = (props) => {

 const onAdd = (Cantidad) => {
     alert("Usted seleccionó " + Cantidad + " productos");
 }

    return (
            <div className="Producto">
                <img src={props.thumbnail} alt={props.title} />
                <div className="datosProducto">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <h4>Precio: {props.price}</h4>
                </div>
                <ItemCount stock={5} inicial={1} onAdd={onAdd}/>
            </div>
    );
}

export default Item;