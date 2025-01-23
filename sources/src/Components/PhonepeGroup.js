import React from "react";
import {goToLink} from "../utils/constants"
import pci from "../images/pci.jpg"
import "./styles/phonePeGroup.css"

export const PhonePeGroup = () =>{
    return(
        <div>
            <h6 className="heading6"><strong>PhonePeGroup</strong></h6>
            <p>Indus Appstore <img className="linkBtn"  src={goToLink} alt="link"></img></p>
            <p>Share Market <img className="linkBtn" src={goToLink} alt="link"></img></p>
            <p>Pincode <img className="linkBtn"src={goToLink} alt="link"></img></p>
            <p></p>
            <h6><strong>Certification</strong></h6>
            <div className="d-flex justify-content-start align-items-end">
            <img className="pci" src={pci} alt="pic"></img><img className="linkBtn"src={goToLink} alt="link"></img>
            </div>
        </div>
    )
}