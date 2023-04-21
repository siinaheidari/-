import React, {useState} from 'react';
import Header from "../header/header";
// import {Tab, initTE,} from "tw-elements";
import CircleIcon from '@mui/icons-material/Circle';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Link} from "react-router-dom";


const CartList = ({carts, setCarts}) => {
    // iniE({Tab});
    const [isLoan, setIsLoan] = useState(false);
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);
    // const [counter, setCounter] = useState(1);
    const [radioValue, setRadiovalue] = useState("");

    const handleLoan = () => {
        setIsLoan(!isLoan)
    }
    const handleDetail1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2("");
    }
    const handleDetail2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1("")
    }


    const incrementItem = (id) => {
        setCarts(carts.map(cart=>cart.id===id ? {...cart,quantity:(cart.quantity)-(cart.quantity>1?1:0)} : cart))
    }
    const decrementItem = (id) => {
        setCarts(carts.map(cart=>cart.id===id ? {...cart,quantity:cart.quantity+(cart.quantity<10?1:0)} : cart))
    }

    const handleRadioValue = () => {
        setRadiovalue(radioValue)
    }

    console.log(radioValue)

    const totalPrice = carts.reduce((prevValue, currValue) => {
        return prevValue + currValue.price * currValue.quantity
    }, 0)

    const totalLoan = carts.reduce((prevValue, currValue) => {
        return prevValue + currValue.price * radioValue / 100
    }, 0)

    return (
        <div className={"flex justify-between items-center text-center w-full max-w-[1200px] m-auto max-md:flex-col"}>
            <div className={"mr-4 w-full max-w-[732px] text-center items-center"}>
                <div
                    className={"flex justify-between items-center p-5 bg-grey text-[16px] font-[500] border rounded-lg shadow-md"}>
                    <p className={"w-[123px] "}>Product details</p>
                    <p className={"w-[190px] max-md:hidden"}>Name</p>
                    <p className={"w-[50px] max-md:hidden"}>price</p>
                    <p className={"w-[50px] max-md:hidden"}>total</p>
                </div>
                {carts.map((cart, index) => {
                    return <div key={cart.id}
                        className={"bg-border flex justify-between p-5 text-[16px] font-[500] max-md:flex-col max-md:justify-center items-center "}>
                        <div>
                            <p className={"hidden"}>Product details</p>
                            <img src={cart.image} alt={""} className={"w-[123px] h-[100px] mr-2"}/>
                            <div className={"flex text-center items-center justify-center my-4"}>
                                <button onClick={() => {
                                    incrementItem(cart.id)
                                }}
                                        className={"w-[25px] bg-orange rounded-full text-white text-[17px] cursor-pointer"}>-
                                </button>
                                <p className={"w-[60px] bg-white mx-1.5 py-1 border-2 rounded-lg"}>{cart.quantity}</p>
                                <button onClick={() => decrementItem(cart.id)}
                                        className={"w-[25px] bg-orange rounded-full text-white text-[17px] cursor-pointer"}>+
                                </button>
                            </div>
                        </div>
                        <div
                            className={"text-center max-md:flex max-md:justify-between max-md:w-full border-b my-4 "}>
                            <p className={"hidden max-md:flex"}>Name</p>
                            <p className={"w-full max-w-[200px] mr-2"}>{cart.title}</p>
                        </div>
                        <div
                            className={"text-center max-md:flex max-md:justify-between max-md:w-full border-b my-4 "}>
                            <p className={"hidden max-md:flex"}>price</p>
                            <p className={"w-full max-w-[50px] mr-2"}>${cart.price}</p>
                        </div>
                        <div
                            className={"text-center max-md:flex max-md:justify-between max-md:w-full border-b my-4 "}>
                            <p className={"hidden max-md:flex"}>Total</p>
                            <div className={"w-full max-w-[50px] mr-2"}>${(cart.price * cart.quantity).toFixed(2)}</div>
                        </div>
                    </div>
                })
                }
            </div>


            <div className={" w-full max-w-[358px] min-h-[300px] border rounded-lg bg-border shadow-md my-4"}>

                <ul className=" flex list-none flex-row w-full bg-grey ">
                    <li className={"w-1/2 py-2 "}>
                        <button onClick={handleDetail1}
                                className={isOpen1 ? "px-16 text-[16px] font-[500] py-4 border rounded-lg text-white bg-purple focus:bg-purple" : "px-16 text-[16px] font-[500] py-4 border rounded-lg focus:text-white"}>cash
                        </button>
                    </li>
                    <li className={"w-1/2 py-2"}>
                        <button onClick={handleDetail2}
                                className={isOpen2 ? "px-16 text-[16px] font-[500] py-4 border rounded-lg text-white focus:bg-purple" : "px-16 text-[16px] font-[500] py-4 border rounded-lg focus:text-white"}>Loan
                        </button>
                    </li>
                </ul>
                <div className="mb-6">
                    <div className={isOpen1 ? "" : "hidden"}>
                        <div className={"flex justify-around my-6 text-[16px] font-[500]"}>
                            <p>Total Amount:</p>
                            <p>${(totalPrice).toFixed(2)}</p>
                        </div>
                        <Link to={"/payment"}>
                            <button className={"bg-button text-white p-2.5 border font-[400] rounded-md mt-32"}>Proceed
                                to Check Out
                            </button>
                        </Link>
                    </div>
                    <div className={isOpen2 ? "text-[16px] font-[500]" : "hidden"}>
                        <div className={"flex justify-between w-full max-w-[230px] m-auto my-5"}>
                            <form onSubmit={handleRadioValue} className={"flex-col"}>
                                <div className={"my-2"}>
                                    <input  type="radio" value={0.5} required
                                           onChange={e => setRadiovalue(e.target.value)}
                                           checked={radioValue === '0.5'}/>
                                    <label htmlFor="0.5"> 3 months</label>
                                </div>
                                <div className={"my-2"}>
                                    <input  type="radio" value={10}
                                           onChange={e => setRadiovalue(e.target.value)}
                                           checked={radioValue === '10'}/>
                                    <label htmlFor="10"> 6 months</label>
                                </div>
                                <div className={"my-2"}>
                                    <input  type="radio" value={20}
                                           onChange={e => setRadiovalue(e.target.value)}
                                           checked={radioValue === '20'}/>
                                    <label htmlFor="20"> 12 months</label>
                                </div>
                            </form>
                            <div className={" text-gray-400"}>
                                <p className={"my-2"}>05% intersts</p>
                                <p className={"my-2"}>10% intersts</p>
                                <p className={"my-2"}>20% intersts</p>
                            </div>
                        </div>


                        <button onClick={handleLoan}
                                className={" bg-button text-white p-2.5 border font-[400] rounded-md mt-2 mb-8"}>Proceed
                            to Check Out
                        </button>
                        <div className={isLoan ? "border-t-2 pt-7" : "hidden"}>
                            <div className={"flex items-center text-center justify-center "}>
                                <div className={"w-[90px] mr-4 relative "}>
                                    <p className={"text-[15px] font-[500] text-orange-500 absolute right-[5rem]"}>{(totalLoan).toFixed(2)}$</p>
                                    <CircularProgressbar className={"progress"}
                                                         value={totalPrice}
                                                         value={(totalLoan)}
                                                         text={`${(totalPrice).toFixed(1)}$`}
                                                         background={true}
                                                         strokeWidth={11}
                                                         styles={buildStyles({
                                                             pathColor: "#fd6644",
                                                             trailColor: '#6F11E1',
                                                             textColor: '#6F11E1',
                                                             textSize: "16px",
                                                             strokeLinecap: "butt",
                                                             backgroundColor: "#F9F9F9"
                                                         })}
                                    />
                                </div>
                                <div className={""}>
                                    <p><span>< CircleIcon style={{color: "#6F11E1", fontSize: "17px"}}/></span>Total
                                        price</p>
                                    <p><span className={"mr-2.5"}>< CircleIcon
                                        style={{color: "#FD6644", fontSize: "17px"}}/></span>interests</p>
                                </div>
                            </div>
                            <Link to={"/payment"}>
                                <button onClick={handleLoan}
                                        className={"bg-button text-white p-2.5 border font-[400] rounded-md my-7 "}>Proceed
                                    to Check Out
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartList;
