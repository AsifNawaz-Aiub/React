import React, { useState } from 'react';
import SubToDoList from './SubToDoList';

const ToDoList =()=>{

    const[list,setList]=useState("");
    const[fullList,setfullList]=useState([]);
    const inputList=(event)=>{
        event.preventDefault();
        setList(event.target.value)
    }
    const insertFullList =()=>{
        setfullList((oldItems)=>{
               return[...oldItems, list]
        });
        setList(""); 

    }

    const deleteTask=(id)=>{
        setfullList((oldItems)=>{
            
            return oldItems.filter((arrEl,index)=>{return index !== id })
        });
    }


return(
 <>
<div className="main_div" >
<div className="todo">
  <h1 className="h1Todo">ToDo List</h1>
  <input className="inputTodo" type='text'onChange={inputList} placeholder="Add a task" value={list}/>
  <button className="buttonTodo" onClick={insertFullList}> + </button>
  <br/>
  <br/>
  <br/>


       {/* <li> {list}</li> */}
       {fullList.map((val,index)=>{ return<SubToDoList fullListVal ={val} key={index} id={index} dtTask={deleteTask} />})}
  
</div>       
</div>
</>
)



}

export default ToDoList;