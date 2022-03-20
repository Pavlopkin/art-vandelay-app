import { collection, getDocs, query, where } from 'firebase/firestore';
import db from './firebaseConfig';
/////BUSCA DENTRO DE LA BASE DE DATOS SOLO LOS ITEMS PERTENECIENTES A LA CATEGORIA SELECCIONADA////
export const firestoreFetchCategory = async (category) =>{
    const q = query(collection(db, "avdata"), where('categoryId', '==', parseInt(category)));
    const querySnapshot =await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
      id: document.id,
      ...document.data()
    }));
    return dataFromFirestore;
  }
