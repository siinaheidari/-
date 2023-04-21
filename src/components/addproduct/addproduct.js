import React, {useContext, useState} from 'react';
import Header from "../header/header";
import {ProductsContext} from "../context/context";
import axios from "axios";
import {Link} from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CheckPayment from "../payment/checkpayment";
import CheckAddProduct from "./checkaddproduct";

const AddProduct = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useContext(ProductsContext);

    const handleAddProduct = (e) => {
        e.preventDefault();
        console.log(products)
        const newProduct = {
            title: title,
            description: description,
            category: category,
            image: image,
            price: price,
        }
        console.log(newProduct)
        axios.post("https://fakestoreapi.com/products", newProduct).then(res => {
         setProducts(res.data)
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    const style = {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        boxShadow: 24,
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Header/>
            <div className={" w-[100%] max-w-[545px] h-[100%] m-auto p-5 items-center  "}>
                <div className={"w-[100%] max-w-[545px] h-[100%] m-auto shadow-md border rounded-md "}>
                    <h2 className={"bg-grey w-[100%] py-6 px-24 max-md:px-5 max-md:py-4 font-[500] text-[16px]"}>Add
                        Product</h2>
                    <form onSubmit={handleAddProduct} className={"bg-border m-auto py-10"}>
                        <div className={"relative m-auto mx-20 max-md:mx-7 "}>
                            <p className={"absolute top-[6px] ml-[10px] font-[500] text-[14px]"}>Title</p>
                            <input className={"border-2 rounded-md w-[100%] p-1 max-w-[358px] my-4 h-[48.43px]"}
                                   type="text"
                                   value={title}
                                   onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div className={"relative m-auto mx-20 max-md:mx-7"}>
                            <p className={"absolute  top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Description</p>
                            <input className={"border-2 rounded-md w-[100%] p-1 max-w-[358px] my-4 h-[76px]"}
                                   type="text"
                                   value={description}
                                   onChange={e => setDescription(e.target.value)}/>
                        </div>
                        <div className={"relative m-auto mx-20 max-md:mx-7"}>
                            <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Category</p>
                            <input className={"border-2 rounded-md p-1 w-[100%] max-w-[358px] my-4 h-[48.43px]"}
                                   type="text"
                                   value={category}
                                   onChange={e => setCategory(e.target.value)}/>
                        </div>
                        <div className={"relative m-auto mx-20 max-md:mx-7"}>
                            <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Image URL</p>
                            <input className={"border-2 rounded-md w-[100%] p-1 max-w-[358px] my-4 h-[48.43px]"}
                                   type="text"
                                   value={image}
                                   onChange={e => setImage(e.target.value)}/>
                        </div>
                        <div className={"relative m-auto mx-20 max-md:mx-7"}>
                            <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Price</p>
                            <input className={"border-2 rounded-md w-[100%] p-1 max-w-[358px] my-4 h-[48.43px]"}
                                   type="text"
                                   value={price}
                                   onChange={e => setPrice(e.target.value)}/>
                        </div>
                        <div className={" flex relative m-auto mx-20 max-md:mx-7"}>

                            <button
                                className={"text-orange-500 font-[500] text-[16px] mr-4 border rounded-md border-orange-400 w-[100%] max-w-[171px] h-[43px]"}
                                type="submit">cancel
                            </button>
                            <button onClick={handleOpen}
                                    className={"bg-orange w-[100%] rounded-md text-white font-[400] text-[16px] max-w-[171px] h-[43px]"}
                                    type="submit">
                                Add product
                            </button>
                        </div>
                    </form>
                </div>
                <Modal style={{padding: "2rem"}}
                       open={open}
                       onClose={handleClose}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                >
                    <Box sx={style} style={{borderRadius: "0.5rem"}}>
                        <div className={"w-[545px] m-auto max-md:w-full"}>
                            <CheckAddProduct title={title} category={category} image={image} description={description}
                                             price={price}/>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default AddProduct;
