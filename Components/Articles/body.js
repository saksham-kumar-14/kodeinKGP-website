import Image from "next/image";

import allArticles from "../../api/articles/articles";
import ProgrammerImg from "../../public/Images/programmer.png"

export default function Body(){

    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-16">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-semibold sm:text-[50px] md:text-[75px] lg:text-[100px] bg-gradient-to-r from-[#fff] to-[#5be6ff] text-transparent bg-clip-text">Articles</h1>
                    <p className="text-lg md:text-xl lg:text-3xl mt-5 mb-5">Your Gateway to AI, Web Dev, and Blockchain</p>
                    <p className="text-sm md:text-lg lg:text-xl">Explore cutting-edge trends and insights shaping the future of technology.</p>
                </div>
                <div>
                    <Image
                    src={ProgrammerImg}
                    alt="Image"
                    width={0}
                    height={0}
                    />
                </div>
                
            </div>
        
            {allArticles.length>0 && 

            <div className="flex flex-col lg:flex-row h-[75vh] align-middle">

                <div className="lg:w-[30%] flex flex-col items-center justify-center ">
                    <a href={allArticles[0].link} target="_blank" className="lg:h-[100%] flex flex-col bg-[rgb(20,20,50)] cursor-pointer border-2 border-[rgb(20,20,50)] rounded-3xl  hover:border-[#5be6ff] m-5 align-middle p-2">
                        <Image
                            className="rounded-t-2xl w-[100%]"
                            src={allArticles[0].img}
                            width={250}
                            height={250}
                        />
                        <span
                        className="m-5 font-semibold text-xl bg-gradient-to-r from-[#5be6ff] to-[#fff] text-transparent bg-clip-text"
                        >{allArticles[0].date}</span>
                        <span className="m-5 text-3xl">{allArticles[0].title}</span>
                    </a>
                </div>
                
                <div className="lg:w-[70%] overflow-y-scroll lg:border-none border-2 border-[#5be6ff] p-4 rounded-2xl">
                    {allArticles.map((e, idx)=>{
                        if(idx!=0){
                            return(
                                <div className="flex justify-center align-middle">
                                    <a
                                    className="bg-[rgb(20,20,50)] border-2 border-[rgb(20,20,50)] rounded-3xl  hover:border-[#5be6ff] flex m-2 lg:m-5 p-1"
                                    key={idx} target="_blank" href={e.link}>
                                        <Image
                                        className="rounded-l-2xl object-cover"
                                        src={e.img}
                                        width={150}
                                        height={200}
                                        />
                                        <div className="flex flex-col align-middle justify-center p-3">
                                            <span
                                            className="sm:text-lg md:text-xl lg:text-2xl font-semibold text-xl bg-gradient-to-r from-[#5be6ff] to-[#fff] text-transparent bg-clip-text"
                                            >{e.date}</span>
                                            <span
                                            className="sm:text-lg md:text-xl lg:text-2xl"
                                            >{e.title}</span>
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                    })}
                </div>
            
            </div>
                
            }

        </div>
    )
}