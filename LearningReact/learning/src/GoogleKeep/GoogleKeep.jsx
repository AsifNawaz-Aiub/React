import React, { useState } from "react";
import Header from './Header'
import CreateNote from './CreateNote'
import Note from "./Note";

const GoogleKeep=()=>{
    const [eachNote, setEachNote]= useState([])
    const allNotes=(note)=>{
        setEachNote((preVal)=>{
            return[...preVal,note]
        })
    }
    const deleteNote=(id)=>{
        setEachNote((preVal)=>{
           return preVal.filter((val,index)=>{return index !==id})
        })
      
    } 

// Here eachnote variable store all the notes
return(<>
<Header/>
<div >
<div className="main_div3">
<CreateNote passNote={allNotes}/>
</div>
<div className="main_div4">
{eachNote.map((val,index)=>{
    return( <Note 
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    dNote={deleteNote}
    />);
})}


</div>
</div>
</>);

}

export default GoogleKeep;