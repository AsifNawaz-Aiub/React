import React, { useState } from 'react';
import Details from './Details';
import Greet from './Greet';
import {Add,Sub} from './Calculator';
import Cards from './Cards';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Sdata";
import SlotMachine from './SlotMachine';
import data from './Sdata';

function ncard (val){

return(
       <Cards 
       key={val.id}
       imgSource={val.imgSource}
       title={val.title}
       seriesName={val.seriesName}
       link={val.link}  
/> 
);
}




function App(){
      // let count=0;
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+": PM";
      //var time=today.toLocaleTimeString();
      var [time, setTime]= useState(time);
    
       const IncNum =() =>{
              today = new Date();
              setTime(time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+": PM");
              console.log("Clicked");
       };

return(
<>
{/* <Greet/>
<Details/>
<h1>The Sum is {Add(10,5)}  </h1>
<h1>The Sub is {Sub(10,5)}  </h1> */}
<h2 className="text-muted blockquote text-center" style={{marginTop:"60px"}}>List of Top 5 Netflix Series</h2>
<div className="row" style={{justifyContent: "center"}}>
<h1>Welcome to Slot Machine  </h1>

<h1>{time}</h1>

<button onClick={IncNum}>Click Me</button>
{/* {data.map(ncard)} */}
{/* {data.map(ncard)} */}
{/* {data.map( (val)=>{
       return(
       <Cards 
       key={val.id}
       imgSource={val.imgSource}
       title={val.title}
       seriesName={val.seriesName}
       link={val.link} /> );
})} */}
{/* <SlotMachine x="A" y="A" z="A"/>
<SlotMachine x="A" y="A" z="B"/> */}

</div>
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

//==>
// {data.map(ncard)}
// {data.map(ncard)}
// {data.map( (val)=>{
//        return(
//        <Cards 
//        key={val.id}
//        imgSource={val.imgSource}
//        title={val.title}
//        seriesName={val.seriesName}
//        link={val.link} /> );
// })}
//<==