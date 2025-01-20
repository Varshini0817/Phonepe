import React  from "react";
import './Accordian.css';
function Accordion(){
    return(
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                    Is it safe to transfer money through PhonePe?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" 
                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>Yes, it is 100% safe to send money using the PhonePe app. The details of your transaction can only be seen by you and the person you are sending money to.</p>
                    </div>
                </div>
            </div> 
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Is the PhonePe app safe?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse"
                aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>Yes. PhonePe uses a blend of cutting-edge technology and strong fraud & risk processes to make every user's experience on the app safe and secure.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        How do I register a fraud complaint on PhonePe?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse"
                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>You can register your complaint with PhonePe Customer Support by clicking on the Help icon on the Homepage of the app. You can also log in tohttps://support.phonepe.com/and report your issue.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        How secure is my information on PhonePe?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse"
                aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>As soon as you register on PhonePe, your number is validated via an OTP. There is an mPIN or Password setup for all UPI transactions. Also your login from any device is validated through an OTP verification.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        Is it safe to add a bank account on PhonePe?
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse"
                aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>Adding a bank account on PhonePe is 100% safe & secure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;