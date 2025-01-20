import React from 'react';

function Body() {
    return (
        <div className='d-flex justify-content-around align-items-start flex-wrap'>
            <div className='col-12 col-md-5 p-3  '>
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img src="https://img.icons8.com/?size=100&id=VkXtsSRYQQ4n&format=png&color=000000" alt='lock'></img>
                    <h3>Built-in Security Measures</h3>
                    <p>Your transactions are protected with advanced authentication methods, including fingerprint/face ID, UPI PIN, and password verification.
                    </p>
                </div>
            </div>
            <div className='col-12 col-md-5 p-3 '>
                <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
                    <img src='https://img.icons8.com/?size=100&id=123434&format=png&color=228BE6' alt='payments'></img>
                    <h3>Private & Confidential Payments</h3>
                    <p>Rest assured, only you and the recipient can view the details of your transactions. Your payment information remains strictly confidential.
                    </p>
                </div>
            </div>
            <div className='col-12 col-md-5 p-3'>
                <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
                    <img src='https://img.icons8.com/?size=100&id=zbcXu8eW08Db&format=png&color=228BE6' alt='risk'></img>
                    <h3>Proactive Risk Monitoring</h3>
                    <p>Our dedicated security team monitors transactions 24/7 to detect and prevent suspicious activity. Fraudulent users are swiftly identified and blocked from the platform.
                    </p>
                </div>
            </div>
            <div className='col-12 col-md-5 p-3 '>
                <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
                    <img src='https://img.icons8.com/?size=100&id=ITGbCUAC9jmB&format=png&color=228BE6' alt='safety'></img>
                    <h3>Collaborating for Safety</h3>
                    <p>We’ve partnered with leading government law enforcement and security agencies, such as the National Cybercrime Portal, CyCord, and CyberSafe, to promote secure transactions and combat cybercrime.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Body;