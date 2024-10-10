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
                <h2 className="font-semibold text-[50px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Heads</h2>
                
                <div className="grid grid-cols-3">
                    {heads.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4" key={idx}>
                                <span className="text-xl text-[#5be6ff]">{e.role}</span>
                                <Image
                                    className="w-[20vw] h-[40vh] object-cover"
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
                <h2 className="font-semibold text-[50px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Founders</h2>
                
                <div className="flex justify-center align-middle">
                    {founders.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4"  key={idx}>
                                <Image
                                    className="w-[20vw] h-[40vh] object-cover"
                                    src={e.img}
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                                <div className="flex text-xl">
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
                <h2 className="font-semibold text-[50px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Advisors</h2>
                <div className="grid grid-cols-3">
                    {advisors.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4"  key={idx}>
                                <Image
                                    className="w-[20vw] h-[40vh] object-cover"
                                    src={e.img}
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                                <div className="flex text-xl">
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
                <h2 className="font-semibold text-[50px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Our Teams</h2>
                
                <div className="mt-4 mb-4">
                    {teams.map((e, idx)=>{
                        return <button
                            className="m-5 p-3 duration-500 font-semibold text-lg border-2 rounded-xl bg-inherit text-inherit hover:bg-white hover:text-[rgb(1,1,27)]"
                            key={idx} onClick={()=>{
                                setDisplayTeam(idx)
                            }} >{e.name}</button>
                    })}
                </div>

                <span className="font-semibold text-3xl">{teams[displayTeam].name}</span>
                <div className="grid grid-cols-3">
                    {teams[displayTeam].list.map((e, idx)=>{
                        return(
                            <div className="border-2 border-[#5be6ff] flex flex-col justify-center items-center font-semibold p-4 m-4"  key={idx}>
                                <Image
                                    className="w-[20vw] h-[40vh] object-cover"
                                    src={e.img}
                                    alt="image"
                                    width={300}
                                    height={300}
                                />
                                <div className="flex text-xl">
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