import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';
/////OBTIENE LOS DATOS DEL PRODUCTO QUE SE MOSTRARÁN EL EL ITEM DETAIL/////////////
const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  
    const firestoreFetch = async (id) => {
    const docRef = doc(db, "avdata", id);
    const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return {
          id: id,
          ...docSnap.data()
        };
      } else {
        console.log("No such document!");
      }
    }
    useEffect(() => {
      firestoreFetch(id)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
    }, [id]);
  
    useEffect(() => {
      return(() => {
        setProducts([]);
      })
    }, []);

  return (
    <>
      <ItemDetail item={products} />
    </>
  );
}
export default ItemDetailContainer;

