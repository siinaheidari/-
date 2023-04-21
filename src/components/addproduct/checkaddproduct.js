import React from 'react';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Woman2Icon from '@mui/icons-material/Woman2';
import ManIcon from '@mui/icons-material/Man';

const CheckAddProduct = ({title, price, description, image, category}) => {
    return (
        <>
            <div className={"p-2"}>
                <div className={"text-center border-b-2 py-5"}>
                    <CheckCircleIcon fontSize={"large"} style={{color: "#1BAC03"}}/>
                    <h2 className={"text-[20px] max-md:text-[14px] font-[500]"}>Your product has been successfully
                        registered</h2>
                </div>
                <div className={"flex max-md:flex-col max-md:text-start justify-center items-center text-[16px] font-[500] max-md:text-[12px] m-auto py-10 max-md:py-7"}>
                    <div className={""}>
                        <img src={image} alt={""} className={"w-[180px] mx-3 max-md:mx-0 border rounded-md"}/>
                    </div>
                    <div className={"max-w-[320px] w-full text-[14px]"}>
                        <div className={"my-4"}>
                            <p>{title}</p>
                        </div>
                        <div className={"text-gray-500 text-[12px] my-2 leading-5"}>
                            <p>{description}</p>
                        </div>
                        <div className={"text-gray-700 text-[12px] my-2"}>
                            <p><span>Category:</span> {category}
                                {category === "women" ? <Woman2Icon/> : "" || category === "men" ? <ManIcon/> : ""
                                || category === "jewelery" ? <CheckroomIcon/> : "" ||
                                category === "electronics" ? <PhoneAndroidIcon/> : ""
                                }
                            </p>
                        </div>
                        <div className={"my-5"}>
                            <p>Price: <span>{price}$</span></p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default CheckAddProduct;
