import { createContext, useState } from "react";



export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    console.log("probando", cartList)

    const addToCart = (item, cantidad) => {
        const exist = cartList.find((cartItem)=> cartItem.id === item.id);
        if(exist) {
            setCartList(
                cartList.map((productos) => {
                return { ...productos, cantidad: productos.cantidad + productos.cantidad};
                })
            )
        } else {
            setCartList([
                ...cartList,
                {
                id: item.id,
                title: item.title,
                thumbnail: item.thumbnail,
                price: item.price,
                cantidad: cantidad,
            }]);
        };
    }
    const deleteFromCart = (id) => {
        setCartList(cartList.filter((item)=>item.id !== id));
    }
    const refreshCart = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteFromCart, refreshCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;