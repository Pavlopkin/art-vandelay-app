import { createContext } from "react";
import { useState } from "react";


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
            setCartList(cartList.filter((item)=>item.id !== id));
    }
    const refreshCart = () => {
        setCartList([]);
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
        <CartContext.Provider value={{cartList, addToCart, deleteFromCart, refreshCart,  totalPorProducto, totalCarrito, totalCantidad, calculaIva, totalCompra}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

