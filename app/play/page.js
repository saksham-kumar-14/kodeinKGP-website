'use client'
import React, { useState } from 'react';

export default function Play(){

    const [sudoku ,setSudoku] = useState([
                                    [4,0,5],
                                    [0,7,1],
                                    [8,0,0]
                                ]);
    let emptyPlaces = [];
    for(let i=0; i<sudoku.length; i++){
        for(let j=0; j<sudoku[0].length; j++){
            if (sudoku[i][j] == 0) emptyPlaces.push([i, j]);
        }
    }
    let emptyPlacesPtr = 0;

    function valid(i, j){
        for(let a=0; a<sudoku.length; a++){
            if(a != i && sudoku[i][j] == sudoku[a][j]){
                return false;
            }
        }
        for(let a=0; a<sudoku[0].length; a++){
            if (a!=j && sudoku[i][j] == [i][j]){
                return false;
            }
        }
        return true;
    }

    function solve(){
        
    }

    return(
        <div>
            <div className="flex flex-col justify-center items-center">
                {sudoku.map((i)=>{
                    return(
                        <div className="flex flex-row justify-center align-middle">
                            {i.map((j)=>{
                                return(
                                    <div>
                                        {j == 0 ? 
                                        <input type="number" /> : 
                                        <span>{j}</span>}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>

            <button onClick={()=>{
                solve();
                console.log(sudoku)
            }}>Take Help?</button>

        </div>
    )
}