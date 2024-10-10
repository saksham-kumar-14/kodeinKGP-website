import Image from "next/image"
import ProgrammerIllustration from "../../public/Images/programmer.png"

export default function Desc(){

    return(
        <div>
            
            <div>
                <span>260+ PDS Problems</span>
                <span>17+ Articles</span>
                <span>15+ Events</span>
                <span>7000+ Community Members</span>
            </div>

            <div>
                <div>Our Expertise</div>
                
                <div>
                    <span>Web</span>
                    <p>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.</p>
                </div>

                <div>
                    <span>AI & Metaverse</span>
                    <p>Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.</p>
                </div>

                <div>
                    <span>Blockchain</span>
                    <p>Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.</p>
                </div>

            </div>

            <div>
                <div>
                    <span>Still Getting Stuck in PDS?</span>
                    <span>Our curated PDS Problems set works right for you...</span>
                </div>

                <Image
                    src = {ProgrammerIllustration}
                    alt="kodein"
                    width={200}
                    height={200}
                />
            </div>

        </div>
    )
}