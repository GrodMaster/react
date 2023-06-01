;'use client'
import React from "react";
import Links from "./ui/Links";

class Navigation extends React.Component{
    render(){
        return(
            <nav>
             <Links title="Home" link='/'/>
             <Links title="Pogoda" link='/pogoda'/>
            </nav>
        )
    }
}

export default Navigation