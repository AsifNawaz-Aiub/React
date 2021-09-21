import React from 'react';
import Details from './Details';
import Greet from './Greet';
import {Add,Sub} from './Calculator';
import Cards from './Cards'

function App(){


return(
<>
{/* <Greet/>
<Details/>
<h1>The Sum is {Add(10,5)}  </h1>
<h1>The Sub is {Sub(10,5)}  </h1> */}
<Cards imgSource="https://wallpaperaccess.com/full/1510470.jpg"  
       title="A Netflix Original"
       seriesName="Dark"
       link="https://www.netflix.com/bd/title/80100172"  
/>
</>
);

}

export default App