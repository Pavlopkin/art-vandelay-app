import Item from '../components/Item'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


let is_stock = true;
const data = [
  {
    id: 1,
    title: "Campera Gore Tex",
    description: "Protegete de las bajas temperaturas con la distinguida campera Gore Tex. Confeccionada con la mejor materia prima, te distanciará del frio y probablemente del resto de la sociedad.",
    thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/gore.png",
    price: "$ 25.000.-",
    stock: 25,
    categoryId: 1,
  },
  {
    id: 2,
    title: "Puffy Shirt",
    description: "El último grito de la moda llegó a nuestros locales. Con esta camisa con volados serás el centro de atención en todas tus reuniones o fiestas de disfraces.",
    thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/puffy.png",
    price: "$ 6.000.-",
    stock: 10,
    categoryId: 1,
  },
  {
    id: 3,
    title: "Bolígrafo anti gravedad",
    description: "Olvidate de tomar notas sobre la espalda de otra persona, con este bolígrafo diseñado por la NASA podrás realizar anotaciones en las condiciones mas extremas, incluso contra el techo de tu casa",
    thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/boligrafo.png",
    price: "$ 1.500.-",
    stock: 5,
    categoryId: 3,
  },
  {
    id: 4,
    title: "Jimmy's Shoes",
    description: "¿Querés mejorar tu rendimiento jugando al Basquet? ¿No llegás al estante de la alacena donde están guardadas las papitas? No te preocupes, entrená con las Jimmy's Shoes y saltá más alto que nunca.",
    thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/shoes.png",
    price: "$ 13.000.-",
    stock: 13,
    categoryId: 2,
  },
  {
    id: 5,
    title: "Fusilli Jerry",
    description: "¿Estás aburrido y tenés hambre? Los Fusilli Jerry son la solución que necesitabas. Armá tu personaje favorito mientras preparás la cena.",
    thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/fusilli.png",
    price: "$ 1.200.-",
    stock: 2,
    categoryId: 3,
  },
  {
    id: 6,
    title: "The coffee table booky",
    description: "Llegó el libro definitivo de las mesitas de cafe. Con sus patas retráctiles podrás tomar tu infusión favorita en los lugares mas exóticos.",
    thumbnail: "https://pavlopkin.github.io/Art-Vandelay/assets/bookof.png",
    price: "$ 3.500.-",
    stock: 100,
    categoryId: 3,
  },
];

function ItemList() {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();
  console.log(idCategory);
 
  const customFetch = (timeOut, data) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (is_stock) {
                  resolve(data);
              } else {
                  reject('KO');
              }
          }, timeOut);
      });
  };
  useEffect(() => {
    if(idCategory === undefined) {
      customFetch(2000, data)
        .then(data => setProducts(data))
        .catch((error) =>  console.log('hubo un error. Ver los detalles aqui: ', error));
    } else{
      customFetch(2000, data.filter(item => item.categoryId === parseInt(idCategory)))
        .then(data => setProducts(data))
        .catch((error) => console.log('hubo un error. Ver los detalles aqui: ', error))
    }
  }, [idCategory]);

  
  return (
    <>{
        products.map(item => 
          <Item key={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            id={item.id}/>
        )
      }
      </>
  );
};

export default ItemList;

