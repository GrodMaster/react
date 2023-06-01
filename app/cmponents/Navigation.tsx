;'use client'
import React from "react";
import Links from "./ui/Links";

class Navigation extends React.Component{
    render(){
        return(
            <nav>
             <Links title="Home" link='/'/>
             <Links title="Option" link='/dashboard'/>
            </nav>
        )
    }
}

export default Navigation