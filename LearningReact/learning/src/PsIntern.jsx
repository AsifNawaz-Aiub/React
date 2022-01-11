import React, { useState, useEffect } from 'react';
import axios from 'axios'

import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PsInternForm from './PsInternForm';
import PsInternCreate from './PsInternCreate';

const PsIntern =(props)=>{

// const [user,setUser]=useState({
//   FirstName:"",
//   LastName:"",
//   Email:"",

// });
const [data2,setData2]=useState([]);
const [data,setData]=useState([]);
const [state, setState]=useState(false);
//const [hide, setHide]=useState(false);
const [form, setForm]=useState(false);
const [reload,SetReload]=useState(false);
useEffect(()=>{
    
    async function getData(){
     
     await axios.get(`http://localhost:61274/api/User/AllUsers`).then((response) => {
      
        let d=response.data;
        console.log(d); 
        setData(d);
    
    })
    .catch((err) => {
        console.log(err);
    });
    // console.log(res);
    //  setUser({
    //  FirstName: res.data.FirstName,
    //  LastName: res.data.LastName,
    //  Email: res.data.Email,})
  // console.log(res.data)
 
    }; 
     
    getData();

    //console.log(data);  
   },[data2,state,form,reload]);

   const sendId=(id)=>{
     props.setTextField(id);
     setData2(id);
     setState(true);
     //setHide(false);
   }
  const deleteUser = async (id)=>{
    console.log("delete")
    await axios.delete(`http://localhost:61274/api/User/DeleteUser/${id}`).then((response) => {
      if(response.data=="success"){ SetReload(true); alert("Delete Successsful")}else{ alert(response.data)}
  })
  .catch((err) => {
      console.log(err);
  });

  }
 
  
    return (<>
{state &&  <PsInternForm dataTextField={data2} setState={setState}/>}
{ form && <PsInternCreate setForm={setForm}/>}
    <button type="button" onClick={()=>{setForm(true);}}> Create </button>
    <div style={{textAlign :'left'}}>
    <table className="table table-dark">
    <thead>
    <tr>
    <th scope="col">FirstName</th>
    <th scope="col">LastName</th>
    <th scope="col">Email</th>
    <th scope="col">Department Name</th>
    <th scope="col">Designation</th>
    <th scope="col">User Type</th>
    <th scope="col">Edit</th>
    <th scope="col">Delete</th>
  </tr></thead>
  <tbody>
     {data.map((val)=>{ return (<tr><td>{val.FirstName}</td><td>{val.LastName}</td>
     <td>{val.Email}</td><td>{val.Department.DepartmentName }</td>
     <td>{val.Designation.DesignationName }</td>
     <td>{val.UserType==1?'Teacher':'Student' }</td>
     <td>
     <button type="submit" onClick={()=>{sendId(val)}}> Edit </button>
    
     </td>
     <td> <button type="submit" onClick={()=>{deleteUser(val.UserId)}}> Delete </button></td>
     </tr>)
    
    })} 
   
  </tbody>
     </table>

    
    </div>
    </>)

}

export default PsIntern;


