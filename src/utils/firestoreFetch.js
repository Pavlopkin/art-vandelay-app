import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';
/////BUSCA TODOS LOS ITEMS DENTRO DE LA BASE DE DATOS////////////
export const firestoreFetch = async () => {
    const querySnapshot = await getDocs(collection(db, "avdata"));
    return querySnapshot.docs.map( document => ({
      id: document.id,
      ...document.data()
    }));
  }