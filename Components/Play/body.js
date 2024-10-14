'use client'
import FindOne from "./findOne";
import Sudoku from "./sudoku"
import { useState } from "react";

export default function Body(){

    const [game, setGame] = useState();

    return(
        <div>
            <div className="flex justify-center align-middle pt-4 pb-4">
                <button 
                className={
                    game != 'sudoku' ? 
                    "rounded-3xl ml-4 mr-4 pl-5 pr-5 pt-2 pb-1 text-2xl border-2 border-[#5be6ff] cursor-pointer hover:border-black hover:duration-300"
                    :
                    "rounded-3xl ml-4 mr-4 pl-5 pr-5 pt-2 pb-1 text-2xl border-2 bg-[#5be6ff] hover:border-[#5be6ff] cursor-pointer border-black hover:duration-300"
                }
                onClick={()=>{
                    setGame('sudoku')
                }}>Sudoku</button>


                <button
                className={
                    game != 'findOne' ? 
                    "rounded-3xl ml-4 mr-4 pl-5 pr-5 pt-2 pb-1 text-2xl border-2 border-[#5be6ff] cursor-pointer hover:border-black hover:duration-300"
                    :
                    "rounded-3xl ml-4 mr-4 pl-5 pr-5 pt-2 pb-1 text-2xl border-2 bg-[#5be6ff] hover:border-[#5be6ff] cursor-pointer border-black hover:duration-300"
                }
                onClick={()=>{
                    setGame('findOne')
                }}>FindBall</button>
            </div>

            {game == "sudoku" && <Sudoku />}
            {game == 'findOne' && <FindOne/>}

        </div>
    )
}