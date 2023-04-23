import React, {useContext, useEffect} from 'react';
import {CartContext} from "../context/context";
import CartList from "./cartlist";
import Header from "../header/header";

const Cart = () => {
    const [carts, setCarts] = useContext(CartContext);
    console.log(carts)

    useEffect(() => {
        localStorage.setItem('add2', JSON.stringify(carts))
    }, [carts]);

    return (
        <div>
            <Header/>
            <div className={"w-full max-w-[1200px] m-auto p-5"}>
                <p className={"text-[16px] font-[500] my-4"}>Shopping cart</p>
                <CartList key={carts.id} carts={carts} setCarts={setCarts}/>
            </div>

        </div>
    );
};

export default Cart;
