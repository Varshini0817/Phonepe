import React from 'react';

function Box(props) {
    console.log(props)
    console.log('Items:', props.items);  // Check the items
    console.log('Images:', props.img);   // Check the images

    return (
        <div className='d-flex justify-content-around align-items-start flex-wrap'>
            {props.items.map((item, index) => (
                <div key={index} className='col-12 col-md-5 p-3'>
                    <div>
                        <img className='m-3' src={props.img[index]} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Box;
