//var React = require('react');
//var ReactDOM = require('react-dom');
//in Es6
import React from 'react';
import ReactDOM from 'react-dom';

const fname="Asif";
const lname="Nawaz";


//ReactDOM.render('what','where','callback')
ReactDOM.render(
<React.Fragment>
<h1 contentEditable="true" >Hello World</h1>,
<img src="" alt="No Image to show"/>,  
<p> I am {fname + " " + lname} and I am {20+3} year old</p>
<p> {`I am ${fname}  ${lname} and I am ${20+3} year old`} </p>
<p> {`Todays Date: ${new Date().toLocaleDateString()} and Time: ${new Date().toLocaleTimeString()} `} </p>
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