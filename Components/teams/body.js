'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

import heads from "@/api/teams/heads"
import advisors from "@/api/teams/advisors"
import teams from "@/api/teams/teams"
import founders from "@/api/teams/founders"

export default function Body(){

    const [displayTeam, setDisplayTeam] = useState(0);

    return(
        <div>

            <div className="flex flex-col justify-center items-center m-6">
                <h2 className="font-semibold text-[50px] sm:text-[35px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Heads</h2>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {heads.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4" key={idx}>
                                <span className="text-xl text-[#5be6ff]">{e.role}</span>
                                <Image
                                    className="lg:w-[20vw] h-[40vh] md:w-[35vw] sm:w-[80vw] object-cover"
                                    src={e.img}
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                                <div className="flex text-xl text-[rgb(1,1,27)] hover:text-white hover:duration-[2.5s]">
                                    <a className="m-1" target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a className="m-1" target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a className="m-1" target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a className="m-1" target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a className="m-1" target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span className="text-xl">{e.name}</span>
                            </div>
                        )
                    })}
                </div>
            
            </div>

            <div className="flex flex-col justify-center items-center m-6">
                <h2 className="font-semibold text-[50px] sm:text-[35px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Founders</h2>
                
                <div className="flex justify-center align-middle flex-col lg:flex-row md:flex-row">
                    {founders.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4"  key={idx}>
                                <Image
                                    className="lg:w-[20vw] h-[40vh] md:w-[35vw] sm:w-[80vw] object-cover"
                                    src={e.img}
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                                <div className="text-xl flex text-[rgb(1,1,27)] hover:text-white hover:duration-[2.5s]">
                                    <a className="m-1" target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a className="m-1" target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a className="m-1" target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a className="m-1" target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a className="m-1" target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span className="text-xl">{e.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col justify-center items-center m-6">
                <h2 className="font-semibold text-[50px] sm:text-[35px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Advisors</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {advisors.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4"  key={idx}>
                                <Image
                                    className="lg:w-[20vw] h-[40vh] md:w-[35vw] sm:w-[80vw] object-cover"
                                    src={e.img}
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                                <div className="text-xl flex text-[rgb(1,1,27)] hover:text-white hover:duration-[2.5s]">
                                    <a className="m-1" target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a className="m-1" target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a className="m-1" target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a className="m-1" target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a className="m-1" target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span className="text-xl">{e.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center m-6">
                <h2 className="font-semibold text-[50px] sm:text-[35px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Our Teams</h2>
                
                <div className="mt-4 mb-4 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2">
                    {teams.map((e, idx)=>{
                        let className = "m-5 p-3 duration-500 font-semibold text-lg border-2 rounded-xl bg-inherit text-inherit hover:bg-white hover:text-[rgb(1,1,27)]";
                        if(idx == displayTeam){
                            className = "m-5 p-3 duration-500 font-semibold text-lg border-2 rounded-xl bg-white text-[rgb(1,1,27)]";
                        }
                        return (
                            <button
                            className={className}
                            key={idx} onClick={()=>{
                                setDisplayTeam(idx)
                            }} >{e.name}</button>
                        )
                    })}
                </div>

                <span className="font-semibold text-3xl">{teams[displayTeam].name}</span>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {teams[displayTeam].list.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4"  key={idx}>
                                <Image
                                    className="lg:w-[20vw] h-[40vh] md:w-[35vw] sm:w-[80vw] object-cover"
                                    src={e.img}
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                                <div className="text-xl flex text-[rgb(1,1,27)] hover:text-white hover:duration-[2.5s]">
                                    <a className="m-1" target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a className="m-1" target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a className="m-1" target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a className="m-1" target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a className="m-1" target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span className="text-xl">{e.name}</span>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}