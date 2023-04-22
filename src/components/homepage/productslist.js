import React, {useContext, useState} from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";
import {CartContext} from "../context/context";
import StarRateIcon from '@mui/icons-material/StarRate';


const ProductsList = ({product, detail}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [carts, setCarts] = useContext(CartContext);

    const addToCart = () => {
        setCarts([...carts, {...product, quantity: 1}])
    }

    const style = {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,

    };

    return (
        <>
            <Link to={`/product/${product.id}`}>
                <div onClick={handleOpen}
                     className={"flex-col w-[264px] h-[410px] max-md:w-[150px] max-md:h-[265px] transition ease-in-out delay-200 hover:scale-105 p-3 max-md:p-1.5 shadow-lg m-1 rounded-[10px] items-center relative"}>
                    <img className={"w-[248px] max-md:w-[136px] max-md:h-[115px] my-1.5 h-[200px] "} src={product.image}
                         alt=""/>
                    <div>
                        <div className={"flex justify-between text-center items-center my-1"}>
                            <p className={"bg-orange max-w-[130px] max-md:max-w-[90px] text-center text-white p-1.5 px-2  max-md:p-[1px] rounded-[20px] text-sm max-md:text-[10px] font-inter"}>{product.category}</p>
                            <span className={"max-md:hidden"}><Rating value={product.rating ? product.rating.rate : ""} size="small"/></span>
                            <span className={"hidden max-md:block"}><Rating style={{fontSize:"11px"}} value={product.rating ? product.rating.rate : ""} size="small"/></span>
                        </div>
                        <h2 className={"max-md:hidden text-[16px] max-md:text-[12px] font-medium my-1.5 max-md:my-0"}>{product.title.slice(0, 50)}</h2>
                        <h2 className={"md:hidden text-[16px] max-md:text-[12px] font-medium my-1.5 leading-4 max-md:my-0"}>{product.title.slice(0, 21)}</h2>
                        <h3 className={"max-md:hidden text-[12px] max-md:text-[10px] font-thin text-gray-400 leading-4 my-2 max-md:my-0"}>{product.description.slice(0, 120)}</h3>
                        <h3 className={"md:hidden text-[12px] max-md:text-[10px] font-thin text-gray-400 leading-4 my-2 max-md:my-0"}>{product.description.slice(0, 70)}</h3>
                        <div className={"flex justify-around w-full text-center items-center absolute bottom-0.5"}>
                            <p className={"text-[16px] max-md:text-[14px] leading-5 font-[500]"}>{`${product.price}$`}</p>
                            <span className={"bg-purple-700 rounded-[7px] p-1"}>
                                <LocalMallOutlinedIcon onClick={addToCart} style={{
                                    color: "white",
                                    fontSize: "29px",
                                    backgroundColor: "purple",
                                    padding: "0.1rem",
                                    borderRadius: "7px"
                                }}/>
                            </span>
                        </div>
                    </div>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={style} style={{borderRadius:"10px"}}>
                        <div className={"w-[900px] max-lg:w-[750px] max-md:w-[300px] p-[2px]  "}>
                            <div className={" bg-grey p-6 text-[16px] font-[500] flex justify-between  "}>
                                <h2 className={"w-[150px]"}>Product details</h2>
                                <div className={"flex"}>
                                    <StarRateIcon style={{color:"#F9B618"}}/>
                                    <span className={"text-grey font-[400]"}>{product.rating.rate ? product.rating.rate : ''}</span>
                                </div>
                            </div>
                            <div onClick={handleOpen}
                                 className={"flex justify-around max-md:flex-col max-md:p-3 p-3 py-10 px-10 rounded-[10px] items-start"}>
                                <img className={"w-[360px] max-md:w-[273px] max-md:h-[210px] h-full max-h-[257px] mr-4 max-md:mr-0"}
                                     src={product.image} alt=""/>
                                <div className={"w-full max-w-[367px]"}>
                                    <h2 className={"text-[16px]  max-md:text-[14px] font-medium leading-5 mb-5 max-md:my-3 "}>{product.title}</h2>
                                    <h3 className={"text-[14px] font-thin text-gray-400 leading-4 "}>{product.description}</h3>
                                    <div className={"flex justify-between w-full items-center my-10 max-md:my-5"}>
                                        <p className={"text-[16px] font-bold"}>{`${product.price}$`}</p>
                                        <span onClick={addToCart}
                                              className={"bg-purple rounded-[5px] p-1.5 px-7 text-white text-[16px] cursor-pointer"}><LocalMallOutlinedIcon
                                            style={{
                                                color: "white",
                                                fontSize: "25px",
                                                marginRight: "8px",
                                            }}/>Add to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>

                </Modal>
            </Link>
        </>
    );
};

export default ProductsList;
