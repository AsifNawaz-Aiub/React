import React from 'react';
import './index.css'; 
function Details(){
    const fname="Asif";
    const lname="Nawaz";
    const inLineCss = {
        textAlign : 'center'
       };

    return (
    <div>
    <h1 className="heading" style={inLineCss} contentEditable="true" >Hello World</h1>
    <div className="img_div"><img  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="No Image to show"/> </div>
    <p> I am {fname + " " + lname} and I am {20+3} year old</p>
    <p> {`I am ${fname}  ${lname} and I am ${20+3} year old`} </p>
    <p> {`Todays Date: ${new Date().toLocaleDateString()} and Time: ${new Date().toLocaleTimeString()} `} </p>
    </div>
    )
    
}

export default Details