import Image from "next/image";

import allArticles from "../../api/articles/articles";
import ProgrammerImg from "../../public/Images/programmer.png"

export default function Body(){

    return(
        <div>
            <div>
                <div>
                    <h1>Articles</h1>
                    <p>Your Gateway to AI, Web Dev, and Blockchain</p>
                    <p>Explore cutting-edge trends and insights shaping the future of technology.</p>
                </div>
                <Image
                src={ProgrammerImg}
                alt="Image"
                width={300}
                height={300}
                />
            </div>

            <div>
                {allArticles.map((e, idx)=>{
                    return(
                        <a key={idx} target="_blank" href={e.link}>
                            <span>{e.title}</span>
                            <span>{e.date}</span>
                        </a>
                    )
                })}
            </div>

        </div>
    )
}