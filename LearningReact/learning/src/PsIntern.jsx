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
const [select,SetSelect]=useState(null);

const [deptId,SetDeptId]=useState(0);
useEffect(()=>{
    
    async function getData(){
     
     await axios.get(`http://localhost:61274/api/User/AllUsers?deptId=${deptId}`).then((response) => {
      
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
   },[data2,state,form,reload,deptId,select]);

   const sendId=(id)=>{
     props.setTextField(id);
     setData2(id);
     setState(true);
     SetSelect(id.UserId);
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
{state &&  <PsInternForm dataTextField={data2} setState={setState} SetSelect={SetSelect}/>}
{ form && <PsInternCreate setForm={setForm}/>}
<select name="filterByDepartment" onChange={(event)=>{SetDeptId(event.target.value)}} style={{marginTop:'21px'}}>
<option value={0}>Filter By Department</option>
<option value={1}>CSE</option>
<option value={2}>BBA</option>
</select>
    <button type="button" onClick={()=>{setForm(true);}} class="btn btn-success"> Create </button>
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
     {data.map((val)=>{ return (<tr style={val.UserId == select?{color:'yellow'}:{}}><td>{val.FirstName}</td><td>{val.LastName}</td>
     <td>{val.Email}</td><td>{val.Department.DepartmentName }</td>
     <td>{val.Designation.DesignationName }</td>
     <td>{val.UserType==1?'Teacher':'Student' }</td>
     <td>
     <button type="submit" class="btn btn-warning" onClick={()=>{sendId(val)}}> Edit </button>
    
     </td>
     <td> <button type="submit" class="btn btn-danger" onClick={()=>{deleteUser(val.UserId)}}> Delete </button></td>
     </tr>)
    
    })} 
   
  </tbody>
     </table>

    
    </div>
    </>)

}

export default PsIntern;


