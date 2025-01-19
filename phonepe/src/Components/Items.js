import React from 'react';
import Box from './Box';

function Items(){
    const img = [
        "https://img.icons8.com/?size=100&id=VkXtsSRYQQ4n&format=png&color=000000",
        'https://img.icons8.com/?size=100&id=123434&format=png&color=228BE6',
        'https://img.icons8.com/?size=100&id=zbcXu8eW08Db&format=png&color=228BE6',
        'https://img.icons8.com/?size=100&id=ITGbCUAC9jmB&format=png&color=228BE6'
    ]

    const items = [
        {title: "Built-in Security Measures" , description : "Your transactions are protected with advanced authentication methods, including fingerprint/face ID, UPI PIN, and password verification."},
        {title: "Private & Confidential Payments", description : "Rest assured, only you and the recipient can view the details of your transactions. Your payment information remains strictly confidential."},
        {title: "Proactive Risk Monitoring" , description : "Our dedicated security team monitors transactions 24/7 to detect and prevent suspicious activity. Fraudulent users are swiftly identified and blocked from the platform."},
        {title: "Collaborating for Safety" , description : "We’ve partnered with leading government law enforcement and security agencies, such as the National Cybercrime Portal, CyCord, and CyberSafe, to promote secure transactions and combat cybercrime."}
    ]
    console.log("IMG",items[0], img)
    return (
        <Box img={img} items={items}></Box>
    )
}

export default Items;