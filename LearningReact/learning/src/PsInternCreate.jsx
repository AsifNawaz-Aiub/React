import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const PsInternCreate =(props)=>{


const [user,setUser]=useState({
    userId:"",
    firstName:"",
    lastName:"",
    email:"",
    departmentId:"1",
    designationId:"1",
    userType:"1"
  
});
const inputEvent = (event) =>{
 const{value,name}=event.target;
 setUser((preValue)=>{

        return({
            ...preValue,
            [name]:value   
        })
    })
 }

 const handleSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(user))
    //var data=JSON.stringify(user);
    const put= async ()=>{
       await axios.post('http://localhost:61274/api/User/CreateUser',user).then((response) => {
        console.log(response);
      if(response.data=="success"){ props.setForm(false); alert("Create Successsful")}else{ alert(response.data)}
   
    })
    .catch((err) => {
        console.log(err);
    });
    }
   put();
}




    return (<>

    <div>
    <form onSubmit={handleSubmit}>
<table  className="table table-dark" >
<thead>
    <tr>
    <th scope="col">FirstName</th>
    <th scope="col">LastName</th>
    <th scope="col">Email</th>
    <th scope="col">Department Name</th>
    <th scope="col">Designation</th>
    <th scope="col">User Type</th>
    <th scope="col">Action</th>
  
  </tr>
  </thead>

<tbody>
<tr>
<td scope="col">  <input type='text' name="firstName" onChange={inputEvent}  value={user.firstName} /></td>
<td scope="col">  <input type='text' name="lastName" onChange={inputEvent}  value={user.lastName} /></td>
<td scope="col">  <input type='text' name="email"  onChange={inputEvent} value={user.email} /></td>

<td scope="col">
  
<select name="departmentId"  onChange={inputEvent} style={{marginTop:'21px'}}>
<option value={1}>CSE</option>
<option value={2}>BBA</option>
</select>
</td>

<td scope="col">
 
<select name="designationId"  onChange={inputEvent} style={{marginTop:'21px'}}>
<option value={1}>Admin</option>
<option value={2}>Super Admin</option>
</select>
</td>

<td scope="col">
<select name="userType"  onChange={inputEvent} style={{marginTop:'21px'}}>
<option value={1}>Teacher</option>
<option value={2}>Student</option>
</select>
</td>
<td scope="col" > <button type="submit"style={{marginTop:'26px'}} > Save User </button></td>

</tr>
</tbody>
 </table>
</form>
        
    </div>
   
    </>)

}

export default PsInternCreate;

















