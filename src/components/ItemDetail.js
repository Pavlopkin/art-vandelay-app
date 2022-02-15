import ItemCount from '../components/ItemCount'

const ItemDetail = ( {item} ) => {
    const onAdd = (Cantidad) => {
        alert("Usted seleccionó " + Cantidad + " productos");
    }

    return ( 
        <>
        {
            <div>
                <div className='ItemDetail' key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.thumbnail} alt={item.title}/>
                <p>{item.description}</p>
                <p>Precio: {item.price}</p>
                <p>Unidades disponibiles: {item.stock}</p>
                </div>
                <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} className="itemCount"/>
            </div>
        }
        </>
    );
}

export default ItemDetail;