import React from "react";

import Nav from "@/Components/navbar";
import Footer from "@/Components/footer";
import Body from "@/Components/teams/body";
import Greeting from "@/Components/greeting";

export default function Teams(){

    return(
        <>
            <Nav/>
            <Greeting />
            <Body/>
            <Footer/>
        </>
    )
}