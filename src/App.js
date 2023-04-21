import './App.css';
import {CartProvider, ProductsProvider} from "./components/context/context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./components/homepage/products";
import Header from "./components/header/header";
import Cart from "./components/cart/cart";
import AddProduct from "./components/addproduct/addproduct";
import Login from "./components/login/login";
import Payment from "./components/payment/payment";



function App() {
    return (
        <div>
            <ProductsProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/*"} element={<Login/>}/>
                            <Route path={"/product"} element={<Products/>}/>
                            <Route path={"/product/:id"} element={<Products/>}/>
                            <Route path={"/cart"} element={<Cart/>}/>
                            <Route path={"/payment"} element={<Payment/>}/>
                            <Route path={"/addproduct"} element={ <AddProduct/>}/>

                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </ProductsProvider>
        </div>
    );
}

export default App;
