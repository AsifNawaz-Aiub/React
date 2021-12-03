import React from 'react';

const SubToDoList =(props)=>{

    return (<>

    <div style={{textAlign :'left', paddingLeft :'30px'}}>
    <table>
    <tr>
       <td style={{ paddingRight :'10px'}}> <button className="buttonTodo2" onClick={()=>{ props.dtTask(props.id)}}> X </button></td>
       <td> {props.fullListVal}</td>
        </tr>
     </table>
    </div>
    </>)

}

export default SubToDoList;