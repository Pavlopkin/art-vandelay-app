import { createContext } from "react";
import { useState } from "react";
import swal from "sweetalert";


export const CartContext = createContext();
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (item, cantidad) => {
        let exist = cartList.find(product => product.id === item.id);
        if (exist === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    title: item.title,
                    thumbnail: item.thumbnail,
                    price: item.price,
                    cantidadItem: cantidad,
                }
            ]);
        }else {
            exist.cantidadItem += cantidad;
        }
    }
    const deleteFromCart = (id) => {
            /*setCartList(cartList.filter((item)=>item.id !== id));*/
            swal({
                title: "¿Está seguro?",
                text: "Si confirma se borrará el producto de su carrito",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Se ha eliminado el producto del carrito",
                  setCartList(cartList.filter((item)=>item.id !== id)), {
                    icon: "success",
                  });
                } else {
                  swal("Excelente! el producto sigue en carrito!");
                }
              });
    }
    const eliminaCarrito = () => {
        setCartList([])
    }
    const refreshCart = () => {
        swal({
            title: "¿Está seguro?",
            text: "Si confirma se borrarán todos los productos del carrito",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Su carrito está vacío",
              eliminaCarrito(), {
                icon: "success",
              });
            } else {
              swal("Excelente! conserva los productos en el carrito");
            }
          });
    }
    const totalPorProducto = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].price * cartList[index].cantidadItem; 
    }
    const totalCarrito = () => {
        let totalProducto = cartList.map(item => totalPorProducto(item.id));
        return totalProducto.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    const totalCantidad = () => {
        let totalCantidad = cartList.map(item => item.cantidadItem);
        return totalCantidad.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
    }
    const calculaIva = () => {
        return totalCarrito() * 0.21;
    }
    const totalCompra = () => {
        return calculaIva() + totalCarrito();
    }
    return (
        <CartContext.Provider value={{cartList, addToCart, deleteFromCart, refreshCart, eliminaCarrito,  totalPorProducto, totalCarrito, totalCantidad, calculaIva, totalCompra}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

