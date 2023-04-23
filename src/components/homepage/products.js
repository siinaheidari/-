import React, {createContext, useContext, useEffect, useState} from 'react';
import {ProductsContext} from "../context/context";
import axios from "axios";
import ProductsList from "./productslist";
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import {Link, useParams} from "react-router-dom";
import Header from "../header/header";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClipLoader from "react-spinners/ClipLoader";
import {BounceLoader, GridLoader, HashLoader, RotateLoader} from "react-spinners";

const Products = () => {
    const {id} = useParams();
    const [products, setProducts] = useContext(ProductsContext);
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState([]);
    const [filter, setFilter] = useState(products);

    useEffect(() => {
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setTimeout(()=>{
                    setProducts(res.data)
                    setFilter(res.data);
                    setLoading(false)
                },1500)
                console.log(res.data)
            }).catch(err => {
            console.log(err)
        })
    }, []);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setDetail(res.data)
            }).catch(err => {
            console.log(err)
        })
    }, []);

    const filterProducts = (category) => {
        const updateList = [...products].filter((product) => product.category === category);
        setFilter(updateList);
    }
    const handleDescending = () => {
        const sorted = [...products].sort((low, high) => low.price - high.price)
        setFilter(sorted)
    }

    const handleAscending = () => {
        const sorted = [...products].sort((low, high) => {
            return high.price - low.price
        })
        setFilter(sorted)
    }


    const override = {
        display: "block",
        margin: "10rem auto",
        borderColor: " #6F11E1",
    };

    return (
        <div className={"relative h-[100vh]"}>
            <Header filterProducts={filterProducts}/>
            <div className={"w-[full] m-auto max-md:p-6 flex justify-center "}>
                <img className={"max-md:h-[160px] border rounded-lg bg-payment "} src={"/images/banner.png"} alt=""/>
            </div>
            <div className={"w-full max-w-[1151px] m-auto p-2 my-7 max-md:my-1 max-md:text-[14px] "}>
                <div className={"flex flex-wrap justify-start border-b-2 py-2 max-md:justify-center"}>
                    <span
                        className={"text-[16px] leading-[19px] mx-1.5 font-[500]"}><FormatLineSpacingIcon/>Sorting:</span>
                    <button onClick={handleDescending}
                            className={"te=>xt-[16px]leading-[19px] focus:text-purple mx-8 max-md:mx-2 font-[500] focus:text-purple-700"}>Ascending<NorthIcon
                        style={{fontSize: "14px"}}/></button>
                    <button onClick={handleAscending}
                            className={"text-[16px] leading-[19px] focus:text-purple mx-8 max-md:mx-2 font-[500] focus:text-purple-700"}>descending<SouthIcon
                        style={{fontSize: "14px"}}/></button>
                </div>
                <div className={"flex flex-wrap justify-between py-2 my-4 max-md:flex-nowrap max-md:flex-row-reverse overflow-x-auto rtl"}>
                    {!loading && filter.length > 0 ?
                        filter.map((product) => {
                            return <ProductsList key={product.id} product={product} detail={detail}/>
                        }) :<GridLoader
                            color="#6F11E1"
                            loading={loading}
                            cssOverride={override}
                            size={15}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    }
                </div>
            </div>
            <div className={"hidden max-md:flex items-center text-center bg-bottom absolute bottom-0 w-full"}>
                <div className={"w-1/2 text-[12px] py-3"}>
                    <Link to={"/product"}>
                        <HomeOutlinedIcon style={{color:"purple"}}/>
                        <p>Home</p>
                    </Link>
                </div>
                <div className={"absolute bottom-[43px] left-[44%]"}>
                    <AddCircleIcon style={{color: "#6F11E1", fontSize: "50px"}}/>
                </div>
                <div className={"w-1/2 text-[12px] py-3 "}>
                    <PersonOutlinedIcon/>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
