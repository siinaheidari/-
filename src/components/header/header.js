import React, {useContext, useEffect, useState} from 'react';
import {CartContext, ProductsContext} from "../context/context";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';

const Header = ({filterProducts}) => {
    const [cart, setCart] = useContext(CartContext);
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(!open)
    }


    return (
        <div className={"flex text-[17px] text-center items-center justify-between px-3 py-6 max-md:py-4 max-md:-border rounded-md w-full max-w-[1132px] m-auto max-md:bg-gradient-to-r from-blue to-purple "}>
            <div className={"hidden max-md:flex"} onClick={handleOpen}>
                {
                    !open? <ReorderIcon style={{color: "white" , fontSize:"30px"}} />
                        : <ClearIcon style={{color: "white" , fontSize:"30px"}} />
                }
            </div>
            <Link to={"/product"}>
                <div className={"flex items-center text-center"}>
                    <img className={"w-[37.12px] h-[38.39px] mr-2"} src="/images/group 2.png" alt=""/>
                    <img className={"w-[110px] h-[22px] "} src="/images/vector.png" alt=""/>
                </div>
            </Link>
            <div className={open ? " flex-col bg-gradient-to-r from-blue to-purple absolute top-[4rem] left-0 w-full  h-[30%] z-10" : " flex justify-between w-full max-w-[350px] max-md:mt-3 max-md:hidden"}>
                <div  className={"my-5 max-md:text-white  "}>
                    <button onClick={() => filterProducts("electronics")} className={"hover:text-purple focus:text-purple font-[500] text-header"}>electronics</button>
                </div>
                <div className={"my-5 max-md:text-white "}>
                    <button onClick={() => filterProducts("women's clothing")} className={"hover:text-purple focus:text-purple font-[500] text-header"}>women</button>
                </div>
                <div className={"my-5 max-md:text-white "}>
                    <button onClick={() => filterProducts("men's clothing")} className={"hover:text-purple focus:text-purple font-[500] text-header"}>mens</button>
                </div>
                <div className={"my-5 max-md:text-white "}>
                    <button onClick={() => filterProducts("jewelery")} className={"hover:text-purple focus:text-purple font-[500] text-header"}>jewelery</button>
                </div>
                <Link to={"/addproduct"}>
                    <span
                        className={"bg-purple rounded-[7px] p-2.5 pr-2 text-white text-[16px] hidden max-md:block "}><ControlPointIcon
                        style={{
                            color: "white",
                            fontSize: "25px",
                            marginRight: "3px",
                            paddingBottom: "5px"
                        }}/>Add product</span>
                </Link>
            </div>


            <div className={""}>
                 <span className={"bg-purple rounded-[7px] p-2.5 mr-2 relative max-md:bg-transparent"}>
                     <Link to={"/cart"}>
                      <p className={"absolute top-[-5px] left-[-15px] max-md:left-[-1px] max-md:top-[0px] bg-red-500 rounded-full text-[14px] text-white px-[6px] py-[1px] max-md:text-[10px] max-md:left-[4px] max-md:top-[5px] "}>{cart.length}</p>
                     <LocalMallOutlinedIcon style={{color: "white", fontSize: "25px"}}/>
                     </Link>
              </span>
                <Link to={"/addproduct"}>
                    <span
                        className={"bg-purple rounded-[7px] p-2.5 pr-2 text-white text-[16px] max-md:hidden "}><ControlPointIcon
                        style={{
                            color: "white",
                            fontSize: "25px",
                            marginRight: "3px",
                            paddingBottom: "5px"
                        }}/>Add product</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
