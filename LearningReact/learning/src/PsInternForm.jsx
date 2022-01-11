import React, { useState, useEffect } from 'react';
import axios from 'axios'
import data from './Sdata';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const PsInternForm =(props)=>{


const [user,setUser]=useState({});
const inputEvent = (event) =>{
    // setVal(event.target.value);
 //    const name= event.target.name;
 //    const value =event.target.value
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
       await axios.post('http://localhost:61274/api/User/UpdateUser',user).then((response) => {
        console.log(response);
      if(response.data=="success"){ props.setState(false); alert("Update Successsful")}else{ alert(response.data)}
   
    })
    .catch((err) => {
        console.log(err);
    });
    }
   put();
}
useEffect(()=>{
    setUser({
    userId:props.dataTextField.UserId,
    firstName:props.dataTextField.FirstName,
    lastName:props.dataTextField.LastName,
    email:props.dataTextField.Email,
    departmentId:props.dataTextField.DepartmentId,
    designationId:props.dataTextField.DesignationId,
    userType:props.dataTextField.userType
  });
},[props])

//console.log(props.dataTextField)
// setUser({
//     FirstName:props.dataTextField.FirstName,
//     LastName:props.dataTextField.LastName,
//     Email:props.dataTextField.Email,
   
// });

console.log(props.dataTextField.Department.DepartmentId)

    return (<>

    <div >
    <form onSubmit={handleSubmit}>
    <table  className="table table-dark" >

    <tbody>
    <tr>
    {/* <td scope="col" hidden><input type='text' name="UserId" onChange={inputEvent}  value={user.UserId} /></td> */}
    <td scope="col"> Firstname : <input type='text' name="firstName" onChange={inputEvent}  value={user.firstName} /></td>
    <td scope="col"> Lastname : <input type='text' name="lastName" onChange={inputEvent}  value={user.lastName} /></td>
    <td scope="col"> Email : <input type='text' name="email"  onChange={inputEvent} value={user.email} /></td>
    <td scope="col" >Action</td>
    </tr>   
    <tr>
    <td scope="col">
    Department :   
    <select name="departmentId"  onChange={inputEvent}>
    <option value={props.dataTextField.DepartmentId}>{props.dataTextField.Department.DepartmentName}</option>
     {/* {()=>{if(props.dataTextField.Department.DepartmentId==2){return(<option value='2'>BBA</option>)}else{return(<option value='1'>CSE</option>)}}}  */}
    {/* {props.dataTextField.Department.DepartmentId === 1 && (<option value=2>BBA</option>) } */}
    <option value={props.dataTextField.DepartmentId==1?2:1}>{props.dataTextField.Department.DepartmentName=='CSE'?'BBA':'CSE'}</option>
    </select>
    </td>
    
    <td scope="col">
    Designation :  
    <select name="designationId"  onChange={inputEvent}>
    <option value={props.dataTextField.DesignationId}>{props.dataTextField.Designation.DesignationName}</option>
    {/* {()=>{if(props.dataTextField.Department.DepartmentId==2){return(<option value='2'>BBA</option>)}else{return(<option value='1'>CSE</option>)}}}  */}
    {/* {props.dataTextField.Department.DepartmentId === 1 && (<option value=2>BBA</option>) } */}
    <option value={props.dataTextField.DesignationId==1?2:1}>{props.dataTextField.Designation.DesignationName=='Admin'?'Super Admin':'Admin'}</option>
    </select>
    </td>

    <td scope="col">
    User Type :  
    <select name="userType"  onChange={inputEvent}>
    <option value={props.dataTextField.UserType}>{props.dataTextField.UserType ==1?'Teacher':'Student'}</option>
    <option value={props.dataTextField.DesignationId==1?2:1}>{props.dataTextField.UserType ==1?'Student':'Teacher'}</option>
    </select>
    </td>

    <td scope="col" > <button type="submit" > Save </button></td>

   </tr>
  </tbody>
     </table>
   </form>
   {/* {()=>{if(2==2){return(<h1>xhzjdfvdh</h1>)}else{return(<h1>hsdfsdhfbd</h1>)}}} */}
    </div>
    </>)

}

export default PsInternForm;