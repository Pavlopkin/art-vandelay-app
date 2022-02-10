import ItemList from '../components/ItemList';


const ItemListContainer = ({greeting}) => {
    return (
        <div className='itemListcontainer'>
            <h2>{greeting}</h2>
            <ItemList />
        </div> 
    );
}
export default ItemListContainer;