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

            <div>
                <h2>Heads</h2>
                <div>
                    {heads.map((e, idx)=>{
                        return(
                            <div key={idx}>
                                <span>{e.role}</span>
                                <Image
                                    src={e.img}
                                    alt="image"
                                    width={100}
                                    height={150}
                                />
                                <div>
                                    <a target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span>{e.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2>Founders</h2>
                <div>
                    {founders.map((e, idx)=>{
                        return(
                            <div key={idx}>
                                <Image
                                    src={e.img}
                                    alt="image"
                                    width={100}
                                    height={150}
                                />
                                <div>
                                    <a target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span>{e.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2>Advisors</h2>
                <div>
                    {advisors.map((e, idx)=>{
                        return(
                            <div key={idx}>
                                <Image
                                    src={e.img}
                                    alt="image"
                                    width={100}
                                    height={150}
                                />
                                <div>
                                    <a target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span>{e.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2>Our Teams</h2>
                <div>
                    {teams.map((e, idx)=>{
                        return <button key={idx} onClick={()=>{
                            setDisplayTeam(idx)
                        }} >{e.name}</button>
                    })}
                </div>

                <div>
                    {teams[displayTeam].list.map((e, idx)=>{
                        return(
                            <div key={idx}>
                                <Image
                                    src={e.img}
                                    alt="image"
                                    width={100}
                                    height={150}
                                />
                                <div>
                                    <a target="_blank" href="http://facebook.com"><FaFacebook/></a>
                                    <a target="_blank" href="http://gmail.com"><FaMailBulk/></a>
                                    <a target="_blank" href="http://instagram.com"><FaInstagram/></a>
                                    <a target="_blank" href="http://linkedin.com"><FaLinkedin/></a>
                                    <a target="_blank" href="http://github.com"><FaGithub/></a>
                                </div>
                                <span>{e.name}</span>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}