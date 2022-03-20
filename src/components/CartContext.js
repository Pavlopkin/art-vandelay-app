import { createContext } from "react";
import { useState } from "react";
import swal from "sweetalert";
////////////CONTEXT/////////////////////////////////////
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    /////AGREGA ITEM O MODIFICA CANTIDAD DEPENDIENDO DE SI YA SE SELECCIONÓ//////////////
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
    //////ELIMINA PRODUCTO DEL CARRITO///////////////////
    const deleteFromCart = (id) => {
            /* mensaje de confirmación generado con Sweet Alert*/
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
                } 
            });
    }
    ///////ELIMINA TODOS LOS PRODUCTOS DEL CARRITO/////////////////
    const cleanCart = () => {
        setCartList([])
    }
    const refreshCart = () => {
        /* mensaje de confirmación generado con Sweet Alert*/
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
                cleanCart(), {
                icon: "success",
                });
            } 
        });
    }
    /////////////CALCULA EL MONTO TOTAL GASTADO DE C/ ITEM //////////////////////////////
    const totalProduct = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].price * cartList[index].cantidadItem; 
    }
    /////////CALCULA MONTO TOTAL DE TODOS LOS ITEMS SIN INMPUESTOS///////////////////////////////
    const totalCart = () => {
        let totalperProduct = cartList.map(item => totalProduct(item.id));
        return totalperProduct.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    /////////CALCULA LA CANTIDAD DE PRODUCTOS COMPRADA SIN DISCRIMINAR ENTRE ITEMS////////////////
    const totalQty = () => {
        let totalCantidad = cartList.map(item => item.cantidadItem);
        return totalCantidad.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
    }
    //////////CALCULA IMPUESTOS (IVA)//////////////////////////////////////////////////
    const tax = () => {
        return totalCart() * 0.21;
    }
    //////////CALCULA EL MONTO TOTAL DE LA COMPRA CON IMPUESTOS////////////////////////////
    const totalPurchase = () => {
        return tax() + totalCart();
    }
    return (
        <CartContext.Provider value={{cartList, addToCart, deleteFromCart, refreshCart, cleanCart,  totalProduct, totalCart, totalQty, tax, totalPurchase}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

