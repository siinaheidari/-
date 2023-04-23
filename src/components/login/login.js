import React, {useState} from 'react';
import "../../App.css"
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

    const submitForm = () => {
        console.log(submitForm)
        axios.post("https://fakestoreapi.com/auth/login", register).then(response => {
        }).catch(err => {
            console.log(err)
        })
        navigate("/product")
    }


    //////////////////روش دوم/////////////////

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

    ////////////////////////////////////////////////////

    return (
        <div className={"background "}>
            <div className={"background2 "}>
                <div className={"w-full max-w-[1131px] bg-white py-16 px-8 max-md:px-3 m-auto flex justify-around items-center rounded-md "}>
                    <div className={"max-md:hidden"}>
                        <img className={"w-[100%] max-w-[1100px] mr-5"} src="/images/login.png" alt=""/>
                    </div>
                    <div className={"text-center ml-4 max-md:ml-0 items-center text-center w-full max-w-[350px]"}>
                        <div className={"flex justify-center m-auto items-center my-3"}>
                            <img className={"w-[37.12px] h-[38.39px] mr-2 max-md:w-[24px] max-md:h-[24px]"} src="/images/Group 2.png" alt=""/>
                            <img className={"w-[110px] h-[22px] max-md:w-[50px] max-md:h-[10px] "} src="/images/Vector.png" alt=""/>
                        </div>
                        <div>
                            <h1 className={"text-[24px] max-md:text-[14px] text-purple font-[800]"}>Welcome back</h1>
                            <p className={" text-[12px] font-[400] text-gray-400 my-6 "}>A Lorem Ipsum
                                text generator is specifically designed to generate a dummy text or placeholder
                                text.</p>
                        </div>
                      <div className={"my-12"}>
                          <form onSubmit={handleSubmit(submitForm)}>
                              <div className={"relative"}>
                                  <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Username</p>
                                  <input className={"border-2 rounded-md p-1 w-[100%] max-w-[358px] my-4 h-[48.43px]"}
                                         type="text"
                                         name={"username"} {...register("username")}
                                  />
                                  <p className={"text-red-600"}>{errors.fullName?.message}</p>
                              </div>
                              <div className={"relative"}>
                                  <p className={"absolute top-[6px] ml-[10px] ml-[10px] font-[500] text-[14px]"}>Password</p>
                                  <input className={"border-2 rounded-md p-1 w-[100%] max-w-[358px] my-4 h-[48.43px]"}
                                         type="text"
                                         name={"password"} {...register("password")}
                                  />
                                  <p className={"text-red-600"}>{errors.password?.message}</p>
                              </div>
                              <div className={"max-md:mt-20 my-10"}>
                                  <button className={" h-[43.19px] w-full max-md:max-w-[358px] max-w-[250px] border rounded-md bg-purple text-white "}>Login </button>
                              </div>
                          </form>
                      </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
