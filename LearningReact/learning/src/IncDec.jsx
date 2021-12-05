import React, { useState } from 'react';

const IncDec= ()=>{

    const[counter, setCounter]=useState(0);
    const inc= ()=>{
        setCounter((preVal)=>{
            return preVal+1;
        })
    }
    const dec= ()=>{
        setCounter((preVal)=>{
             if (preVal-1 < 0){alert("Cant be negative"); return 0;}else{ return preVal-1};
        })
    }
return(<>
<div className="main_div" >
<div className="todo">
<h1 className="h1Todo">{counter}</h1>
<table>
    <tr>
       <td> <button className="buttonTodo2" onClick={inc} > +</button></td>
       <td> <button className="buttonTodo2" onClick={dec} > -</button></td>
    </tr>
     </table>
</div>
</div>
</>)
}

export default IncDec;