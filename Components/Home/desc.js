import Image from "next/image"
import ProgrammerIllustration from "../../public/Images/programmer.png"
import webImg from "../../public/Images/web.jpg"
import blockchainImg from "../../public/Images/blockchain.jpg";
import metaImg from "../../public/Images/meta.jpg";
import { useRouter } from "next/navigation";

export default function Desc(){

    const router = useRouter();

    return(
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-semibold text-[20px] lg:text-[25px] pl-20 pt-10 pb-10">
                <div>
                    <span className="text-white m-2">260+</span> <span className="bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">PDS Problems</span>
                </div>
                <div>
                    <span className="text-white m-2">17+</span> <span className="bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Articles</span>
                </div>
                <div>
                    <span className="text-white m-2">15+</span> <span className="bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Events</span>
                </div>
                <div>
                    <span className="text-white m-2">7000+</span> <span className="bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Community Members</span>
                </div>
            </div>

            <div>
                <div className="flex justify-center align-middle">
                    <h2 className="m-4 font-semibold text-2xl lg:text-5xl bg-gradient-to-r from-[#11e3fb] to-[#ffff] text-transparent bg-clip-text">Our Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="flex flex-col justify-center align-middle resize bg-[rgb(20,20,50)] p-5 rounded-xl m-5 hover:duration-500 hover:bg-[rgb(30,30,50)] delay-200">
                        <Image
                            className="w-[100%] h-[100%] object-cover rounded-2xl"
                            src={webImg}
                            width={500}
                            height={500}
                        />
                        <span className="text-2xl font-semibold m-4 bg-gradient-to-r from-[#11e3fb] to-[#fff] text-transparent bg-clip-text">Web</span>
                        <p className="text-sm">Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.</p>
                    </div>

                    <div className="flex flex-col justify-center align-middle resize bg-[rgb(20,20,50)] p-5 rounded-xl m-5 hover:duration-500 hover:bg-[rgb(30,30,50)] delay-200">
                        <Image
                            className="w-[100%] h-[100%] object-cover rounded-2xl"
                            src={metaImg}
                            width={500}
                            height={500}
                        />
                        <span className="text-2xl font-semibold m-4 bg-gradient-to-r from-[#11e3fb] to-[#fff] text-transparent bg-clip-text">AI & Metaverse</span>
                        <p className="text-sm">Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.</p>
                    </div>

                    <div className="flex flex-col justify-center align-middle resize bg-[rgb(20,20,50)] p-5 rounded-xl m-5 hover:duration-500 hover:bg-[rgb(30,30,50)] delay-200">
                        <Image
                            className="w-[100%] h-[100%] object-cover rounded-2xl"
                            src={blockchainImg}
                            width={500}
                            height={500}
                        />
                        <span className="text-2xl font-semibold m-4 bg-gradient-to-r from-[#11e3fb] to-[#fff] text-transparent bg-clip-text">Blockchain</span>
                        <p className="text-sm">Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.</p>
                    </div>
                </div>

            </div>

            <div className="p-5 mt-6 mb-6 ml-20 mr-20 bg-[rgb(20,20,50)] cursor-pointer grid md:grid-cols-2 lg:grid-cols-2 rounded-2xl hover:duration-500 hover:bg-[rgb(30,30,50)] delay-200"
                onClick={()=>{
                    router.push("/pds")
                }}>
                <div className="flex flex-col justify-center align-middle">
                    <span className="font-semibold text-[25px] lg:text-[30px] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text">Still Getting Stuck in PDS?</span>
                    <span className="text-sm font-semibold">Our curated PDS Problems set works right for you...</span>
                </div>

                <Image
                className="w-[100%] h-[100%] object-cover"
                    src = {ProgrammerIllustration}
                    alt="kodein"
                    width={500}
                    height={500}
                />
            </div>

        </div>
    )
}
