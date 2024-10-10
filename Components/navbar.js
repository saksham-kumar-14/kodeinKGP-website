'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import KodeinLogo from "../public/Images/kodein_logo.jpg"

export default function Nav(){

    const router = useRouter();

    return(
        <div>
            <div>
                <Image
                    src = {KodeinLogo}

                    alt = "logo"
                    width = {50}
                    height = {50}
                />

                <span>KodeinKGP</span>
            </div>
            
            <div>
                <button onClick={()=>{
                    router.push("/")
                }}> Home </button>
                <button onClick={()=>{
                    router.push("/teams")
                }}>Teams</button>
                <button onClick={()=>{
                    router.push("/articles")
                }}>Articles</button>
            </div>
        </div>
    )
}