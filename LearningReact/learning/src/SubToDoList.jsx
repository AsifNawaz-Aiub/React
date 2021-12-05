import React, { useState } from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const SubToDoList =(props)=>{

const [line,setLine]=useState(false);
const cutIt =()=>{
    setLine(true);
}
    return (<>

    <div style={{textAlign :'left', paddingLeft :'30px'}}>
    <table>
    <tr>
       <td style={{ paddingRight :'10px',  paddingTop :'7px'}}> 
       {/* <button className="buttonTodo2" onClick={()=>{ props.dtTask(props.id)}}> X </button> */}
        <RemoveCircleIcon sx={{color:"#8566aa",':hover':{color:'#e90707'}}} onClick={()=>{ props.dtTask(props.id)}}/> 
       {/* <RemoveCircleIcon onClick={cutIt}/> */}
       </td>
      <td> {props.fullListVal}</td> {/* style={{ textDecoration:line?"line-through":"none" }} */} 
        </tr>
     </table>
    </div>
    </>)

}

export default SubToDoList;