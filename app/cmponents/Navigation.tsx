;'use client'
import React from "react";
import Link from "next/link";

// import Links from "./ui/Links";

class Navigation extends React.Component{
    render(){
        return(
            <nav>
             <Link  href='/'>Главная</Link>
             <Link  href='/pogoda'>Погода</Link>
            </nav>
        )
    }
}

export default Navigation