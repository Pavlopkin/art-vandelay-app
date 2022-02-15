import { customFetch } from '../utils/customFetch.js';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.js';

const {data} = require('../utils/data.js');


const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    customFetch(2000,data[3])
    .then(response => setProducts(response))
    .catch(error => console.log(error)) 
  }, []);
  
  return (
    <>
      <ItemDetail item={products} />
    </>
  ); 
}

export default ItemDetailContainer;