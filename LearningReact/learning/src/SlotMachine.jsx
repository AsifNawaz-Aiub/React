import React from "react";

const SlotMachine= (props)=>{

    // var x ="A";
    // var y= "A";
    // var z="A"
    // or  let {x,y,z}= props;
    if(props.x===props.y && props.y===props.z){
           return(
                  <>
                         <h1> {props.x} {props.y} {props.z} Same</h1>
                  </>
           );
    }else{
           return(
                  <>
                         <h1>{props.x} {props.y} {props.z} Not Same</h1>
                  </>
           );
    }
}

export default SlotMachine;