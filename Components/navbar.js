'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { HiMenu } from "react-icons/hi";
import KodeinLogo from "../public/Images/kodein_logo.png"

export default function Nav(){

    const router = useRouter();
    const [listClassName, setListClassName] = useState("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4");
    const allClassNames = [
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        "md:hidden sm:hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    ]

    return(
        <div className="grid lg:grid-cols-2 gap-4 text-xl sticky top-0 w-[100vw] pt-4 pb-4 bg-inherit opacity-80" > 
            <div className="grid grid-cols-2 mr-6 ml-6 mt-3 mb-3">
                
                <div className="flex align-middle items-center justify-start">
                    <Image
                        className="cursor-pointer hover:animate-spin"
                        onClick={()=>{router.push("/")}}
                        src = {KodeinLogo}

                        alt = "logo"
                        width = {50}
                        height = {50}
                    />

                    <strong onClick={()=>{router.push("/")}} className="hidden md:flex lg:flex text-2xl ml-8 mr-8 cursor-pointer" >KodeinKGP</strong>
                </div>

                <div className="flex lg:hidden justify-end self-end">
                    <HiMenu className="cursor-pointer text-3xl" onClick={()=>{
                        if(listClassName == allClassNames[0]) setListClassName(allClassNames[1]);
                        else setListClassName(allClassNames[0]);
                    }} />
                </div>
            </div>
            
            
            <div className= {listClassName} >
                <div className="flex justify-center">
                    <button
                    className="underline-button"
                    onClick={()=>{
                        router.push("/")
                    }}> Home </button>
                </div>

                <div className="flex justify-center">
                    <button
                    className="underline-button"
                    onClick={()=>{
                        router.push("/teams")
                    }}>Teams</button>
                </div>

                <div className="flex justify-center">
                    <button
                    className="underline-button"
                    onClick={()=>{
                        router.push("/articles")
                    }}>Articles</button>
                </div>

                <div className="flex justify-center">
                    <button
                    className="underline-button"
                    onClick={()=>{
                        router.push("/play")
                    }}> Play </button>
                </div>
                
                </div>


        </div>
    )
}