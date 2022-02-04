import React from "react"
import './styles/Header.css'

export default function Header(){
    return (
        <section>
            <img src={require("../images/Tech Tree.png")} className="techTree"></img>
            <h1 className="myName">Harshil Jani</h1>
                <ul><li>Indian Engineering Student at NIT - Surat with Electronics and Communications as Majors and Computer Science Engineering as Minors.</li>
                <li>Learning about Compilers, Rust, System Programming, Digital Logic and many more technical domains.</li><li> Strong enthusiasm and respect for 
                Open Source community and exploring the Linux at its fullest.</li><li>Promotes World Peace by improving Human Recognizations. Dreaming to serve 
                one day to Orgnizations of United Nations and maintain the serenity of our beloved planet.</li> 
                <li>Contact Me by Mailing at <b>harshiljani2002@gmail.com</b></li>
                </ul>
        </section>
    )
}