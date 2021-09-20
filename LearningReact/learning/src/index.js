//var React = require('react');
//var ReactDOM = require('react-dom');
//in Es6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 

const fname="Asif";
const lname="Nawaz";
const currDate= new Date(2021,9,20,20);
var hour="";
var msg="";
hour= currDate.getHours();
console.log(hour);

if(hour >=1 && hour <=11 ){ msg="Good Morning";}
else if(hour >=12 && hour <=19){msg="Good Afternoon";}
else{msg="Good Night";}

const inLineCss = {
 textAlign : 'center'
};


//ReactDOM.render('what','where','callback')
ReactDOM.render(
<React.Fragment>
<div style={{backgroundColor: 'white', padding: 10, marginLeft:550, marginRight:550, marginTop:200, borderRadius:30 }}>
<h1 className="heading" style={inLineCss}>Hello Sir, {msg}</h1>

</div>

<div style={{display:'none'}}>
<h1 className="heading" style={inLineCss} contentEditable="true" >Hello World</h1>
<div className="img_div"><img  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="No Image to show"/> </div>
<p> I am {fname + " " + lname} and I am {20+3} year old</p>
<p> {`I am ${fname}  ${lname} and I am ${20+3} year old`} </p>
<p> {`Todays Date: ${new Date().toLocaleDateString()} and Time: ${new Date().toLocaleTimeString()} `} </p>
</div>

</React.Fragment>, 
  document.getElementById('root')); //template literals at line 16, jsx attributes at line 14 and 15

// JSX -> JavaScript exts/ XML (everything we write alike html)

// Babel -> Modern JavaScript Compiler

// In JS without react ==>
// var h1= document.createElement('h1');
// h1.innerHTML="Hello World";
// document.getElementById("root").appendChild(h1); 
//<==

//ReactDOM.render(),,,  Div or Array of Elements [], Array of Elements [] only works in 16 or higher version of react in render or React.Fragment  or <> </>
// {} is only for expression & JS
// its className in jsx not class