'use client'
import React, { useState, useEffect } from "react";

export default function Greeting(){

    const [name, setName] = useState();
    const [inputField, setInputField] = useState();
    
    const now = new Date();
    const hours = now.getHours();

    function submit(){
        if (inputField != "" && inputField != ""){
            setName(inputField);
            localStorage.setItem("name", inputField);
        }
    }

    useEffect(()=>{
        const temp = localStorage.getItem("name");
        console.log(temp);
        if(temp != "" && temp!=" " && temp!=null){
            setName(temp);
        }
    },[])

    return(
        <div>

            {
                name ? 
                    <div>
                        { (5 <= hours && hours < 12) &&
                            <span>Good Morning, {name}</span>
                        }
                        {12<= hours && hours < 17 &&
                            <span>Good Afternoon, {name}</span>
                        }
                        { (17<= hours && hours < 24 || 0<= hours && hours < 5)  && 
                            <span>Good Evening, {name}</span>
                        }
                    </div> : 
                    <form onSubmit={submit}>
                        Enter your name <input placeholder="Name" onChange={(e)=>{
                            setInputField(e.target.value)
                        }} />
                    </form>
            }

        </div>
    )
}