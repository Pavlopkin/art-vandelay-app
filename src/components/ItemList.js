import Item from '../components/Item'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cargando from '../assets/loading.gif';
import { firestoreFetchCategory } from '../utils/firestoreFetchCategory';
import { firestoreFetch } from '../utils/firestoreFetch';

function ItemList() {
  const [products, setProducts] = useState([]);
  const  {idCategory}  = useParams();

  useEffect(() => {
    if(idCategory === undefined) {
      firestoreFetch()
        .then(result => setProducts(result))
        .catch(error => console.log(error)); 
    } else{
      firestoreFetchCategory(idCategory)
      .then(result => setProducts(result))
      .catch(error => console.log(error)); 
    }
  }, [idCategory]);

  useEffect(() => {
    return (() => {
      setProducts([])
    })
  }, []);

  if (products.length > 0) {
    /* Renderiza los productos seleccionados */
    return products.map(item => 
      <Item key={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
        id={item.id}/>
    )
  } else {
    /* renderiza gif de carga hasta que carguen los productos de la base de datos*/
    return <div className='loading'>
              <img src={cargando} alt="cargando"/>
            </div>
  }
};

export default ItemList;

