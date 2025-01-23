import React from "react";
import { facebook,linkedIn, twitter, youtube } from "../utils/constants";
import "./styles/icons.css"

export const Icons = () =>{
    return(
        <div className="d-flex justify-content-end align-items-center mx-5">
            <img className="icons" src={linkedIn} alt="li"></img>
            <img className="icons" src={twitter} alt="t"></img>
            <img className="icons" src={facebook} alt="fb"></img>
            <img className="icons" src={youtube} alt="yt"></img>
        </div>
    )
}