import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

/*const {data} = require('../utils/data.js');*/


const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log(id);
  
  /*
  useEffect(() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "avdata"));
      return querySnapshot.docs.map( document => ({
        id: document.id,
        ...document.data()
      }))
    }
    firestoreFetch()
      .then(result => setProducts(result))
      .catch(error => console.log(error));  
    }, [products]); */

  
    const firestoreFetch = async (id) => {
      const docRef = doc(db, "avdata", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return {
          id: id,
          ...docSnap.data()
        };
        /*console.log("Document data:", docSnap.data()); */
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  useEffect(() => {
    firestoreFetch(id)
    .then(result => setProducts(result))
    .catch(err => console.log(err))
  }, [id]);
  
  /*
    useEffect(() => {
      return(() => {
        setProducts([]);
      })
    }, []);*

    

  /* 
  useEffect(() => {
      customFetch(2000, data.find(item => item.id === parseInt(id)))
        .then(data => setProducts(data))
        .catch((error) => console.log('hubo un error. Ver los detalles aqui: ', error))
  }, [id]);
  */

  return (
    <>
      <ItemDetail item={products} />
    </>
  );
  
}
export default ItemDetailContainer;

