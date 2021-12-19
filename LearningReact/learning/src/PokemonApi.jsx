import React, { useEffect, useState } from 'react';
import axios from 'axios'

const PokemonApi =()=>{

  const[num,setNum]=useState();
  const[info, setInfo]= useState({
      name :'',
      moves:'',

  });

  useEffect(()=>{
    
     async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      
      setInfo({name:res.data.name,moves:res.data.moves.length})
      console.log('Hiii2')
        }; 
      
        getData();
      
    },[num]);

  return(<>
   
  <h1>You Chose <span style={{color:'red'}}> {info.name} </span> </h1>
  <h1>Its Have <span style={{color:'red'}}> {info.moves} moves </span> </h1>
    <select value ={num} onChange={(event)=>{setNum(event.target.value)}}>
      <option value="1"> 1 </option>
      <option value="25"> 25 </option>
      <option value="3"> 3 </option>
      <option value="4"> 4 </option>
      <option value="5"> 5 </option>
    </select>
      
    </>);
}

export default PokemonApi;