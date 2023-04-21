import React, {useState} from 'react';
import Header from "../header/header";
import * as yup from "yup"
import {Link, useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {PaymentOutlined} from "@mui/icons-material";
import CheckPayment from "./checkpayment";

const Payment = () => {

    const [open, setOpen] = useState(false);
    const [cardNumber, setCardNumber] = useState("");

    const schema = yup.object().shape({
        cardNumber: yup.string().min(16, " شماره کارت صحیح نیست").required(),
        Cvv2: yup.string().min(3, " باید 3 عدد‌ یاشد").max(3).required(),
        Year: yup.string().min(4, "تاریخ کارت صحیح نیست").max(4).required(),
        Month: yup.string().min(2, "تاریخ کارت صحیح نیست").max(2).required(),
        Epass: yup.string().min(4, "رمز کارت باید ۴ حرف یاشد").max(4).required(),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const handlePayment = (data) => {
        console.log(handlePayment)

    }

    const style = {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#E8FFE4',
        boxShadow: 24,
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Header/>
            <div className={" w-[100%] max-w-[545px] m-auto p-5 items-center  "}>
                <div className={"w-[100%] max-w-[545px] m-auto shadow-md border rounded-md "}>
                    <h2 className={"bg-grey w-[100%] py-6 px-10 max-md:px-5 max-md:py-4 font-[500] text-[16px]"}>Add
                        Payment</h2>
                    <form onSubmit={handleSubmit(handlePayment)}
                          className={"bg-border w-full m-auto p-10 flex-col justify-center items-center "}>
                        <div className={"relative m-auto "}>
                            <p className={"absolute top-[6px] ml-[10px] font-[500] text-[14px]"}>Card number</p>
                            <input className={"border-2 rounded-md w-[100%] p-1  my-4 h-[48.43px]"}
                                   placeholder={"1234 - 5678 - 9123 - 4567"}
                                   value={cardNumber}
                                   onChange={e => setCardNumber(e.target.value)}
                            />
                            {
                                cardNumber.length !== 16 ? <p className={"text-red-600"}>شماره کارت صحیح نیست</p> : ""
                            }

                        </div>
                        <div className={"relative m-auto"}>
                            <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Cvv2</p>
                            <input className={"border-2 rounded-md w-[100%] p-1 my-4 h-[48.43px]"}
                                   type="text"
                                   name={"Cvv2"} {...register("Cvv2")}
                            />
                            <p className={"text-red-600"}>{errors.Cvv2?.message}</p>
                        </div>
                        <div className={"flex items-center "}>
                            <div className={"relative m-auto "}>
                                <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Year</p>
                                <input className={"border-2 rounded-md p-1 w-[100%]  my-4 h-[48.43px]"}
                                       type="text"
                                       name={"Year"} {...register("Year")}
                                />
                                <p className={"text-red-600"}>{errors.Year?.message}</p>
                            </div>
                            <div className={"relative m-auto  w-1/2"}>
                                <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Month</p>
                                <input className={"border-2 rounded-md w-[100%] p-1  my-4 h-[48.43px]"}
                                       type="text"
                                       name={"Month"} {...register("Month")}
                                />
                                <p className={"text-red-600"}>{errors.Month?.message}</p>
                            </div>
                        </div>
                        <div className={"relative m-auto"}>
                            <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>E-pass</p>
                            <input className={"border-2 rounded-md w-[100%] p-1  my-4 h-[48.43px]"}
                                   type="text"
                                   name={"Epass"} {...register("Epass")}
                            />
                            <p className={"text-red-600"}>{errors.Epass?.message}</p>
                        </div>

                        <div className={" flex justify-between relative m-auto py-4"}>

                            <button
                                className={"bg-orange w-full mr-2 rounded-md text-white font-[400] text-[16px] h-[43px]"}>
                                <Link to={"/cart"}>
                                    cancel
                                </Link>

                            </button>

                            <button onClick={handleOpen}
                                    className={"bg-orange w-full  rounded-md text-white font-[400] text-[16px] h-[43px]"}
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
                            <CheckPayment cardNumber={cardNumber}/>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default Payment;
