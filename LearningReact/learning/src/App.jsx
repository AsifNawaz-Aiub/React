import React from 'react';
import Details from './Details';
import Greet from './Greet';
import {Add,Sub} from './Calculator';
import Cards from './Cards'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App(){


return(
<>
{/* <Greet/>
<Details/>
<h1>The Sum is {Add(10,5)}  </h1>
<h1>The Sub is {Sub(10,5)}  </h1> */}
<div className="row" style={{justifyContent: "center", marginTop: "200px"}}>
<Cards imgSource="https://wallpaperaccess.com/full/1510470.jpg"  
       title="A Netflix Original"
       seriesName="Dark"
       link="https://www.netflix.com/bd/title/80100172"  
/> 
<Cards imgSource="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXwa-U61tQ8e68hWRpd3RY8IhkHD40qJEfrRy5Gfj3aciz5FNjFLRMPhaikBAolfCJJ6Vr2om-zkFOVfLTDAsT2gqQTfzF1RT22urxnhqV80zfZjqBO9pT8Jw_zIfA.jpg?r=c9a"  
       title="A Netflix Original"
       seriesName="Money Heist"
       link="https://www.netflix.com/bd/title/80192098"  
/>
<Cards imgSource="https://dp6mhagng1yw3.cloudfront.net/entries/8th/work_netflix-original-series-narcos-social-campaig.jpg"  
       title="A Netflix Original"
       seriesName="NARCOS"
       link="https://www.netflix.com/bd/title/80025172"  
/>  
</div>
</>
);

}

export default App