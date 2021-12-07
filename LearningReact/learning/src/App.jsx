import React, { useState } from 'react';
//import Details from './Details';
//import Greet from './Greet';
//import {Add,Sub} from './Calculator';
//import Cards from './Cards';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Sdata";
import ToDolist from './ToDoList';
import IncDec from './IncDec';
import GoogleKeep from './GoogleKeep/GoogleKeep';
//import SlotMachine from './SlotMachine';
//import data from './Sdata';

// function ncard (val){

// return(
//        <Cards 
//        key={val.id}
//        imgSource={val.imgSource}
//        title={val.title}
//        seriesName={val.seriesName}
//        link={val.link}  
// /> 
// );
// }




function App(){
      const [fullName,setfullName]= useState({
            fname :"",
            lname :"",
            email :"",
            phone :""
      });
      
       const inputEvent = (event) =>{
          // setVal(event.target.value);
       //    const name= event.target.name;
       //    const value =event.target.value
       const{value,name}=event.target;
          setfullName((preValue)=>{

              return({
                  ...preValue,
                  [name]:value   
              })
       //       if(name==='fname'){
       //          return({
       //               fname :value,
       //               lname :preValue.lname,
       //               email :preValue.email,
       //               phone :preValue.phone     
       //          });    
       //       } else if(name==='lname'){
       //        return({
       //             fname :preValue.fname ,
       //             lname :value,
       //             email :preValue.email,
       //             phone :preValue.phone     
       //        });    
       //     } else if(name==='email'){
       //        return({
       //             fname :preValue.fname ,
       //             lname :preValue.lname,
       //             email :value,
       //             phone :preValue.phone      
       //        });    
       //     } else if(name==='phone'){
       //        return({
       //             fname :preValue.fname ,
       //             lname :preValue.lname,
       //             email :preValue.email,
       //             phone :value   
       //        });    
       //     }
          })
       }
       const onSub = (event) =>{
             event.preventDefault();
             alert('Form Submitted')
             // setName(val);
          }

    
    
return(
<>
{/* <div><form onSubmit={onSub}>
       <h1>Hello {fullName.fname} {fullName.lname}</h1>
       <h1> {fullName.email} </h1>
       <h1> {fullName.phone} </h1>
       <input type='text' placeholder="Enter Your First Name" name="fname" onChange={inputEvent} value={fullName.fname} /><br/>
       <input type='text' placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullName.lname} /><br/>
       <input type='email' placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email} /><br/>
       <input type='number' placeholder="Enter Your Phone Number" name="phone" onChange={inputEvent} value={fullName.phone} /><br/>
       <button type="submit"> Click Me </button>
</form>
</div> */}

 {/* <ToDolist/>  */}
 <GoogleKeep/>
{/* <IncDec/> */}

</>
);

}

export default App

{/* <Cards imgSource="https://dp6mhagng1yw3.cloudfront.net/entries/8th/work_netflix-original-series-narcos-social-campaig.jpg"  
       title="A Netflix Original"
       seriesName="NARCOS"
       link="https://www.netflix.com/bd/title/80025172"  
/>   */}
//or
{/* <Cards imgSource={data[0].imgSource}
       title={data[0].title}
       seriesName={data[0].seriesName}
       link={data[0].link}  
/>  */}

{/* <Cards imgSource={data[0].imgSource}
       title={data[0].title}
       seriesName={data[0].seriesName}
       link={data[0].link}  
/>  */}



// Netflix Div ==>------------------------------------------------------------------
{/*
<h2 className="text-muted blockquote text-center" style={{marginTop:"60px"}}>List of Top 5 Netflix Series</h2> 
<div className="row" style={{justifyContent: "center"}}>
{data.map(ncard)} 
{data.map( (val)=>{
       return(
       <Cards 
       key={val.id}
       imgSource={val.imgSource}
       title={val.title}
       seriesName={val.seriesName}
       link={val.link} /> );
})}
</div> 
*/}
// end netflix div <==-------------------------------------------------------

// ==> Greet Details and Calculator---------------------------------------------

{/* <Greet/>
<Details/>
<h1>The Sum is {Add(10,5)}  </h1>
<h1>The Sub is {Sub(10,5)}  </h1> */}

// <== Greet Details and Calculator-----------------

// Slot machine div----------------------------------
{/* 
 <h1>Welcome to Slot Machine  </h1>
<SlotMachine x="A" y="A" z="A"/>
<SlotMachine x="A" y="A" z="B"/> 
*/}
// <==-------------------------------------------------

// Clock Div----------------------------------------------

// -- App fun ()
// let count=0;
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+": PM";
// //var time=today.toLocaleTimeString();
// const [ctime, setTime]= useState(time);

//  const IncNum =() =>{
//         today = new Date();
//         setTime(time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+": PM");
//         console.log("Clicked");
//  };
//  setInterval(IncNum,1000);
//-- End App Fun ()

{/* 
<h1>{ctime}</h1>
<button onClick={IncNum}>Click Me</button> 
*/}

// <== clock div----------------------------------------------

// Dynamic bg change using hook------------------------------------
// App fun ()
// const purple ="#8e44ad";
// const [bg, setBg] =useState(purple);
// const [name, setName]= useState("Click Me")

// const bgChange = ()=>{
// let newBg="#34495e";
// let newname="Wassap";
// setBg(newBg);
// setName(newname);
// }
// end app fun()

{/* <div style={{backgroundColor:bg}}> 
<button onClick={bgChange} >{name}</button>
</div> */}

// end Dynamic bg change--------------------------------------