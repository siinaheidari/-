import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CheckPayment = ({cardNumber}) => {
    return (
        <>
            <div className={"p-4 items-center"}>
                <div className={"text-center border-b-2 py-5"}>
                    <CheckCircleIcon fontSize={"large"} style={{color: "#1BAC03"}}/>
                    <h2 className={"text-payment text-[20px] max-md:text-[14px] font-[500]"}>Your payment is successful</h2>
                </div>
                <div className={"text-[16px] font-[500] max-md:text-[12px] w-[300px] m-auto"}>
                    <div className={"flex items-center justify-between my-3"}>
                        <p> Total amount</p>
                        <p>4578$</p>
                    </div>
                    <div  className={"flex items-center justify-between my-3"}>
                        <p> Card number</p>
                        <h2>{cardNumber}</h2>
                    </div>
                    <div  className={"flex items-center justify-between my-3"}>
                        <p> Tracking Code</p>
                        <p>45646546546</p>
                    </div>
                </div>
                <div className={" max-md:w-full w-full max-w-[240px] m-auto "}>
                    <button className={"bg-payment w-[240px] text-white font-[500] text-[16px] py-3 my-5 border-1 rounded-lg  "}>
                        Complete  transaction
                    </button>
                </div>

            </div>
        </>


    );
};

export default CheckPayment;
