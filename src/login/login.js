import React, {useState} from 'react';
import "../App.css"
import axios from "axios";
import * as yup from "yup"
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

const Login = () => {
    const navigate = useNavigate()

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().min(5, "رمز ورود باید بیشتر از ۴ حرف یاشد").required(),
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) => {
        console.log(submitForm)
        navigate("/product")
    }
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const user = {
    //         username: "mor_2314",
    //         password: "\"83r5"
    //     }
    //     axios.post("https://fakestoreapi.com/auth/login", user).then(response => {
    //     }).catch(err => {
    //         console.log(err)
    //         navigate("/product")
    //     })
    //
    //     if (!user.username && !user.password) {
    //         return;
    //     }
    // }
    return (
        <div className={"background"}>
            <div className={"background2 py-[12rem] px-[2rem] max-md:p-7"}>
                <div
                    className={"w-full max-w-[1131px] bg-white m-auto flex justify-between items-center p-5 max-md:flex-col rounded-md"}>
                    <div>
                        <img className={"w-[100%] max-w-[500px]"} src="/images/login.png" alt=""/>
                    </div>
                    <div className={"text-center"}>
                        <div className={"flex justify-center items-center my-3"}>
                            <img className={"w-[37.12px] h-[38.39px] mr-2"} src="/images/group 2.png" alt=""/>
                            <img className={"w-[110px] h-[22px] "} src="/images/vector.png" alt=""/>
                        </div>
                        <h1 className={"text-[24px] text-purple font-[800]"}>Welcome back</h1>
                        <p className={"w-[332px] text-[12px] font-[400] text-gray-400 my-6 max-md:px-8"}>A Lorem Ipsum
                            text generator is specifically designed to generate a dummy text or placeholder
                            text.</p>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div className={"relative max-md:px-6"}>
                                <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Username</p>
                                <input className={"border-2 rounded-md p-1 w-[100%] max-w-[358px] my-4 h-[48.43px]"}
                                       type="text"
                                       name={"username"} {...register("username")}
                                />
                                <p className={"text-red-600"}>{errors.fullName?.message}</p>
                            </div>
                            <div className={"relative max-md:px-6"}>
                                <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Password</p>
                                <input className={"border-2 rounded-md p-1 w-[100%] max-w-[358px] my-4 h-[48.43px]"}
                                       type="text"
                                       name={"password"} {...register("password")}
                                />
                                <p className={"text-red-600"}>{errors.password?.message}</p>
                            </div>
                            <button className={"w-[185.62px] h-[43.19px] bg-purple text-white my-10"}>Login</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
