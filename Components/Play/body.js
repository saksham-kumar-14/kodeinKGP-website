'use client'
import Sudoku from "./sudoku"
import { useState } from "react";

export default function Body(){

    const [game, setGame] = useState();

    return(
        <div>
            <div>
                <button onClick={()=>{
                    setGame('sudoku')
                }}>Sudoku</button>
            </div>

            {game == "sudoku" && <Sudoku />}

        </div>
    )
}