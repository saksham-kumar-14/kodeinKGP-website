import React from "react";

import Nav from "@/Components/navbar";
import Footer from "@/Components/footer";
import Body from "@/Components/Articles/body";
import Greeting from "@/Components/greeting";

export default function Articles(){

    return(
        <>
            <Nav/>
            <Greeting />
            <Body />
            <Footer />
        </>
    )
}