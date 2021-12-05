import React, { useState } from 'react';
import SubToDoList from './SubToDoList';
import Button from '@mui/material/Button';
//import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';



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
  {/* <button className="buttonTodo" onClick={insertFullList}> + </button> */}
  <Button  onClick={insertFullList} sx={{
    borderRadius: '50%',
    minHeight: '20px',
    width: '10px',
    ':hover': {
      bgcolor: '#20bf6b', // theme.palette.primary.main
      color: 'white',
    }, }}><AddIcon/></Button>
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