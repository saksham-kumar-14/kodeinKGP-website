'use client'
import React, { useState, useEffect } from "react";

export default function Greeting(){

    const [name, setName] = useState();
    const [inputField, setInputField] = useState();
    
    const now = new Date();
    const hours = now.getHours();
    let greeting = "Evening";
    if (5 <= hours && hours < 12) {
        greeting = "Morning";
    }else if(12<= hours && hours < 17 ) {
        greeting = "Afternoon";
    }

    function submit(){
        if (inputField != "" && inputField != ""){
            setName(inputField);
            localStorage.setItem("name", inputField);
        }
    }

    useEffect(()=>{
        const temp = localStorage.getItem("name");
        if(temp != "" && temp!=" " && temp!=null){
            setName(temp);
        }
    },[])

    return(
        <div className="flex align-center justify-center text-[25px] ">

            {
                name ? 
                    <div>
                        <span className="text-lg md:text-[25px] lg:text-[30px]">Good {greeting}, </span> <span onClick={()=>{
                            setInputField(null);
                            setName(null);
                        }} className="cursor-pointer font-semibold text-lg md:text-[25px] lg:text-[30px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">{name}</span>
                    </div>
                    : 
                    <form onSubmit={submit}>
                        <span className="text-lg md:text-[25px] lg:text-[30px]">Enter your name,</span>
                        <input 
                        className="font-semibold caret-white outline-none bg-inherit border-solid border-b-2 border-[#11e3fb] ml-5 mr-5 text-lg md:text-[25px] lg:text-[30px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text"
                        onChange={(e)=>{
                            setInputField(e.target.value)
                        }} />
                    </form>
            }

        </div>
    )
}