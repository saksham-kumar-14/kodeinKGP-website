'use client'
import Image from 'next/image'
import ProgrammerImg from '../../public/Images/programmer.png';

export default function Body(){

    return(
        <div className="grid grid-cols-2 pt-6 pb-6 pl-20 pr-4">
            <div>
                <h1 className="font-semibold text-[60px]">Welcome to <span className="bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">KodeinKGP</span></h1>
                <p className="text-lg mt-4 mb-4 text-gray-400">“The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past”</p>
                <p>A student-run society that aims to spread awareness and educate students about the potential of Web 3.0 and future technologies. We host workshops and hackathons to give students hands-on experience with Blockchain Development and Artificial Intelligence. Additionally, we use our skills in web development and blockchain to work on real-world problems faced by the student community at IIT Kharagpur and beyond. By joining KodeinKGP, students can gain valuable technical skills and contribute to solving important problems while learning about one of the most exciting and rapidly-evolving technologies of our time.</p>
            </div>
            <Image
            className="w-[100%] height[100%]"
            src={ProgrammerImg}
            alt="Code"
            width={300}
            height={300}
            />
        </div>
    )
}