import React from "react"
import logo from "../images/logo.png"
import './styles/Navbar.css'

export default function Navbar(){
    return (
        <nav>
            <div className="Profile-Logo">
            <img src = {require("../images/logo.png")}  className="logo" />
            {/* <h1>Harshil's Technical Toolkit</h1> */}
            </div>
            <div className="Heading">
                <h1> Harshil's Technical Toolkit</h1>
            </div>
        </nav>
    )
}