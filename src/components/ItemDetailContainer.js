import { customFetch } from '../utils/customFetch.js';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';

const {data} = require('../utils/data.js');

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
      customFetch(2000, data.find(item => item.id === parseInt(id)))
        .then(data => setProducts(data))
        .catch((error) => console.log('hubo un error. Ver los detalles aqui: ', error))
  }, [id]);

  return (
    <>
      <ItemDetail item={products} />
    </>
  ); 
}
export default ItemDetailContainer;

