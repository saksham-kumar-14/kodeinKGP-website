'use client'
import React, {useState} from "react"

export default function FindOne(){

    const N = 16;
    let t = [];
    for(let i=0; i<N; i++){
        t.push(0);
    }
    let idx = Math.floor(Math.random()*N);
    t[idx] = 1;

    const [arr, setArr] = useState(t);
    const [selectedIdx, setSelectedIdx] = useState([]);
    const [chance, setChance] = useState(5);
    const [winningIdx, setWinningIdx] = useState(idx);

    function isPresent(a){
        let present = false;
        selectedIdx.map((e)=>{

            if(e == a) {
                present = true;
                return true;
            }
        })
        if(present) return true;
        return false;
    }

    function resetGame(){
        setChance(5);
        setSelectedIdx([]);
        let t = [];
        for(let i=0; i<N; i++){
            t.push(0);
        }
        t[winningIdx] = 0;
        idx = Math.floor(Math.random()*N);
        t[idx] = 1;
        setArr(t);
        setWinningIdx(idx);
    }

    return(
        <div>

            <div className="grid grid-cols-2 pt-4 pb-4">
                <div className="flex justify-center">
                    <h1 className="sm:text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text font-bold">Find ONE</h1>
                </div>

                <div className="flex justify-center">
                    {chance == 0 ? 
                        <button
                        className="rounded-3xl pl-5 pr-5 pt-2 pb-1 text-2xl border-2 border-[#5be6ff] hover:b-2 cursor-pointer hover:border-black hover:duration-300"
                        onClick={resetGame}><h2>Play again!</h2></button>  :
                        <h2 className="text-lg">Chances: <span className="text-xl text-orange-500">{chance}</span> </h2>
                    }
                </div>

            </div>

            <div className="grid grid-cols-4 lg:grid-cols-8">
                {arr.map((e, idx)=>{
                    return(
                        <div 
                        className={
                            !isPresent(idx) ?
                            "w-[9vh] h-[9vh] md:w-[16vw] md:h-[12vw] lg:w-[10vw] lg:h-[8vw] m-2 lg:m-4 bg-[#5be6ff] hover:bg-[#174851] cursor-pointer border-2 rounded-lg border-[#5be6ff] hover:border-black text-white text-2xl flex align-middle justify-center items-center":
                            "w-[9vh] h-[9vh] md:w-[16vw] md:h-[12vw] lg:w-[10vw] lg:h-[8vw] m-2 lg:m-4 bg-[#174851] cursor-pointer border-2 rounded-lg border-black text-black flex align-middle justify-center items-center text-2xl"
                        }
                        onClick={()=>{
                            if(!isPresent(idx) && chance!=0){
                                let temp = selectedIdx
                                temp.push(idx);
                                setSelectedIdx(temp);
                                setChance(chance-1);

                                if (idx == winningIdx) {
                                    setChance(0);
                                    alert("You won!");}
                                else if(chance == 1) alert("Your chances are over. Try again!");
                            }
                        }}>
                            { (isPresent(idx) || chance==0) && 
                            <span>{e}</span>}

                        </div>
                    )
                })}
            </div>

            <div className="flex justify-center pt-3 pb-3">
                <button 
                className="rounded-3xl pl-5 pr-5 pt-2 pb-1 text-2xl border-2 border-[#5be6ff] hover:b-2 cursor-pointer hover:border-black hover:duration-300"
                onClick={resetGame}>
                    Reset</button>
            </div>

        </div>
    )
}
