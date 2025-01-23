import React from "react";
import { BusinessSolutions } from "./BusinessSolutions";
import { Footer } from "./Footer";
import { Insurance } from "./Insurance";
import { Investments } from "./Investments";
import { General } from "./General";
import { Legal } from "./Legal";
import { PhonePeGroup } from "./PhonepeGroup";
import { phonePe } from "../utils/constants";
import "./styles/template.css";
import { Icons } from "./Icons";

export const Template = () => {
    return (
        <div className="template">
            <div className="d-flex justify-content-center align-self-start m-3 p-4 gap-5">
                <img className="phonepeImg" src={phonePe} alt="phonpe"></img>
                <BusinessSolutions></BusinessSolutions>
                <Insurance></Insurance>
                <Investments />
                <General />
                <Legal />
                <PhonePeGroup />
            </div>
            <Icons/>
            <Footer></Footer>
        </div>
    )
}