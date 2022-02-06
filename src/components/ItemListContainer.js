import ItemCount from '../components/ItemCount';


const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock="5" inicial="1" />
        </div> 
    );
}
export default ItemListContainer;