import {createContext, useState} from "react";

export const ProductsContext = createContext();
export const ProductsProvider = (props) => {

    const [products, setProducts] = useState([]);

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export const CartContext = createContext();
export const CartProvider = (props) => {
    const Add = JSON.parse(localStorage.getItem('add2')) || [];
    const [carts, setCarts] = useState(Add);
    return (
        <CartContext.Provider value={[carts, setCarts]}>
            {props.children}
        </CartContext.Provider>
    )
}