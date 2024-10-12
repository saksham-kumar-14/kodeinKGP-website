'use client'
import React, { useState } from 'react';

export default function Sudoku(){

    const [showReset, setShowReset] = useState(false);
    
    const grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
                    [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
                    [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
                    [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
                    [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
                    [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
                    [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
                    [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
                    [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];

    const [sudoku ,setSudoku] = useState(grid);

    function isSafe(grid, row, col){

        const num = grid[row][col];
        for(let x = 0; x <= 8; x++)
            if (grid[row][x] == num)
                return false;
            
        for(let x = 0; x <= 8; x++)
            if (grid[x][col] == num)
                return false;
            
        let startRow = row - row % 3, 
            startCol = col - col % 3;
            
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++)
                if (grid[i + startRow][j + startCol] == num)
                    return false;

        return true;
    }

    function checkWin(){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                if(!isSafe(sudoku, i, j)){
                    return false;
                }
            }
        }
        return true;
    }


    return(
        <div className="flex flex-col items-center justify-center">

            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-center p-4">
                    {sudoku.map((a, i)=>{
                        return(
                            <div className="flex flex-row justify-center align-middle">
                                {sudoku[i].map((b, j)=>{
                                    return(
                                        <div className="w-[20px] h-[20px] text-[20px] m-4">
                                            {sudoku[i][j] == 0 ? 
                                            <input 
                                            onChange={(e)=>{
                                                sudoku[i][j] = e.target.value
                                                setSudoku(sudoku)
                                            }}
                                            className="caret-white w-[100%] h-[90%] outline-none border-b-2 border-[#5be6ff] bg-gradient-to-r from-[#11e3fb] to-[#5be6ff] text-transparent bg-clip-text" type="number" /> : 
                                            <span>{sudoku[i][j]}</span>}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                <div className="flex flex-col justify-center items-center">
                    <button
                    onClick={()=>{
                        setShowReset(true)
                        if(checkWin()) {
                            alert("Solved!")
                        }else{
                            alert("Try again!")
                        }
                    }}
                    className="bg-[rgb(1,1,27)] mb-2 border-white border-2 rounded-2xl pr-6 pl-6 pt-2 pb-2 text-white text-lg hover:bg-white hover:text-[rgb(1,1,27)] hover:duration-500"
                    >Submit</button>
                

                    {showReset &&
                    <button 
                    className="bg-[rgb(1,1,27)] mt-2 border-white border-2 rounded-2xl pr-6 pl-6 pt-2 pb-2 text-white text-lg hover:bg-white hover:text-[rgb(1,1,27)] hover:duration-500"
                    onClick={()=>{
                        setShowReset(false);
                        setSudoku(grid);
                    }}>
                        Reset   
                    </button>}

                </div>

            </div>

        </div>
    )
}