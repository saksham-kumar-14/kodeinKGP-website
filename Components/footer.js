import Image from "next/image"
import { FaFacebook, FaInstagram, FaMedium, FaLinkedin, FaWhatsapp } from "react-icons/fa"

import KodeinLogo from "../public/Images/kodein_logo.jpg"
import resources from "@/api/footer/resources"

export default function Footer(){

    return(
        <div>

            <div>
                <Image
                src={KodeinLogo}
                alt="Kodein Logo"
                width={50}
                height={50}
                />
                <span>KodeinKGP</span>
                <span>Indian Institute of Technology Kharagpur, West Bengal - 721302</span>

                <div>
                    <a target="_blank" href="https://www.facebook.com/kodeinkgp?mibextid=ZbWKwL">
                        <FaFacebook />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/kodeinkgp_iitkgp?igsh=cmhyMXM3YTA5YzZm">
                        <FaInstagram />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/kodeinkgp/">
                        <FaLinkedin />
                    </a>
                    <a target="_blank" href="https://medium.com/@kodeinkgp">
                        <FaMedium />
                    </a>
                    <a target="_blank" href="https://chat.whatsapp.com/IFt69sSqZsu7FlRWl3EIbk">
                        <FaWhatsapp />
                    </a>
                </div>

            </div>

            {resources.map((e, k)=>{
                return (
                    <div key={k}>
                        <span>{e.tech}</span>
                        <div>{e.resources.map((src, idx)=>{
                            return(
                                <a key={idx} target="_blank" href={src.link}>{src.name}</a>
                            )
                        })}</div>
                    </div>
                )
            })}


        </div>
    )
}