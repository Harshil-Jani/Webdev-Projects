import React from "react"
import './styles/Cards.css'
import Data from "../Data";

export default function Cards(props){
    console.log(props);
    // if(props.project == "false"){
    //     <p>No Projects</p>
    // }else{
    //     <a href={props.project} target="_blank">Projects</a>
    // }
    return (
        <div className="cards">
            <img src={props.image} className="card-image"/>
            <div className="cardBottom">
                <div className="entry"><b>{props.title}</b></div>
                <div className="resources"><a href={props.link} target="_blank">Resources</a></div>
                {props.project != "null" && <div className="projects"><a href={props.project} target="_blank">Projects</a></div>}
                {props.project == "null" && <div>No Projects</div>}
            </div>
        </div>
    )
}

//  : <div>No Projects Done</div>