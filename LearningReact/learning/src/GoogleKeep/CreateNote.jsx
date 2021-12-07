import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
const CreateNote =(props)=>{

    const [note, setNote]= useState({
        title:'',
        content:'',

    });
    const inputEvent =(event)=>{
        const{name,value}=event.target;
        setNote((preValue)=>{
            return({
                ...preValue,
                [name]:value,
            })

        });

    }
    const addNote =()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
    
        });
    }
   

    return(<>
      
        <div className="todo2">
        <form>
        <input type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Title'/><br/>
        <textarea rows='' column='' name='content' value={note.content} onChange={inputEvent} placeholder='Write a note' /><br/>

        <Button  sx={{
          borderRadius: '50%',
          minHeight: '20px',
          width: '10px',
          marginLeft:'350px',
          marginTop:'10px',
          bgcolor: 'orange',
          color: 'white',
          ':hover': {
          bgcolor: 'orange', // theme.palette.primary.main
          color: 'black',
    }, }} onClick={addNote}><AddIcon/></Button>
        </form>
        </div> 
        
    </>);
}

export default CreateNote;