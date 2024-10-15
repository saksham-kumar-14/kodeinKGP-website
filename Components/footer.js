import Image from "next/image"
import { FaFacebook, FaInstagram, FaMedium, FaLinkedin, FaWhatsapp } from "react-icons/fa"

import KodeinLogo from "../public/Images/kodein_logo.png"
import resources from "@/api/footer/resources"

export default function Footer(){

    return(
        <div className="border-t-[1px] border-gray-600 lg:p-16 md:p-8 sm:p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:text-2xl md:text-lg sm:text-sm">

            <div className="flex flex-col mt-4 mb-4">
                <Image
                className=""
                src={KodeinLogo}
                alt="Kodein Logo"
                width={50}
                height={50}
                />
                <strong className="mb-4 mt-4">KodeinKGP</strong>
                <span>Indian Institute of Technology Kharagpur, West Bengal - 721302</span>

                <div className="flex">
                    <a target="_blank" href="https://www.facebook.com/kodeinkgp?mibextid=ZbWKwL">
                        <FaFacebook className="size-7 m-2" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/kodeinkgp_iitkgp?igsh=cmhyMXM3YTA5YzZm">
                        <FaInstagram className="size-7 m-2" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/kodeinkgp/">
                        <FaLinkedin className="size-7 m-2" />
                    </a>
                    <a target="_blank" href="https://medium.com/@kodeinkgp">
                        <FaMedium className="size-7 m-2" />
                    </a>
                    <a target="_blank" href="https://chat.whatsapp.com/IFt69sSqZsu7FlRWl3EIbk">
                        <FaWhatsapp className="size-7 m-2" />
                    </a>
                </div>

            </div>

            {resources.map((e, k)=>{
                return (
                    <div key={k} className="flex flex-col p-2 md:p-4 lg:p-6">
                        <span className="font-semibold">{e.tech}</span>
                        <div className="flex flex-col">
                            {e.resources.map((src, idx)=>{
                            return(
                                <a className="text-wheat text-[rgb(245, 222, 179)] mt-4 mb-4" key={idx} target="_blank" href={src.link}>{src.name}</a>
                            )
                        })}</div>
                    </div>
                )
            })}


        </div>
    )
}
