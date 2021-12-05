//var React = require('react');
//var ReactDOM = require('react-dom');
//in Es6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './MyStyle.js';
import App from './App.jsx';

//import Details from './Details';
//import Greet from './Greet';
// To import a file with multiple export ==>
// import default,{ not default, not default (name as it is)} from './__' 
// or import * as abc from './__'
// then to render we have write abc.default, abc.function(), abc.var <==  


//ReactDOM.render('what','where','callback')

ReactDOM.render(<App/>,document.getElementById('root'));
  
  



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
//template literals = {} or while in single or double quote have to use &{}

// The first letter of component file name must be Capital