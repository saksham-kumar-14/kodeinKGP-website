'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import KodeinLogo from "../public/Images/kodein_logo.png"

export default function Nav(){

    const router = useRouter();

    return(
        <div className="grid grid-cols-2 gap-4 text-xl sticky top-0 w-[100%] pt-4 pb-4 bg-inherit" > 
            <div className="flex items-center justify-start mr-6 ml-6 mt-3 mb-3">
                <Image
                    className="cursor-pointer hover:animate-spin"
                    onClick={()=>{router.push("/")}}
                    src = {KodeinLogo}

                    alt = "logo"
                    width = {50}
                    height = {50}
                />

                <strong onClick={()=>{router.push("/")}} className="text-2xl ml-8 mr-8 cursor-pointer" >KodeinKGP</strong>
            </div>
            
            <div className="grid grid-cols-3">
                <div>
                    <button
                    className="underline-button"
                    onClick={()=>{
                        router.push("/")
                    }}> Home </button>
                </div>

                <div>
                    <button
                    className="underline-button"
                    onClick={()=>{
                        router.push("/teams")
                    }}>Teams</button>
                </div>

                <div>
                    <button
                    className="underline-button"
                    onClick={()=>{
                        router.push("/articles")
                    }}>Articles</button>
                </div>
                
            </div>
        </div>
    )
}