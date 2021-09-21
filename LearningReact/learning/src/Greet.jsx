import React from 'react';
import './index.css'; 

function Greet(){

 
 const currDate= new Date(2021,9,20,17);
 var hour="";
 var msg="";
 hour= currDate.getHours();
 console.log(hour);
 var clrofMsg={
     color : ''
}
const inLineCss = {
    textAlign : 'center'
   };
   
if(hour >=1 && hour <=11 ){ msg="Good Morning"; clrofMsg.color="green"}
else if(hour >=12 && hour <=19){msg="Good Afternoon";clrofMsg.color="orange"}
else{msg="Good Night";clrofMsg.color="black"}



    return (
        <div style={{backgroundColor: 'white', padding: 10, marginLeft:550, marginRight:550, marginTop:200, borderRadius:30 }}>
        <h1 className="heading" style={inLineCss}>Hello Sir, <span style={clrofMsg}>{msg}</span></h1></div>
         );
}

export default Greet