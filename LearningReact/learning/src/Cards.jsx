import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Cards(props){


return(
<> 
<div  className="col-sm-3">
 <div className="card" style={{width: "18rem"}}>
  <img src={props.imgSource} alt="Card image cap" className="card-img-top" style={{width:"18rem",height:"200px"}}/>
  <div className="card-body">
  <span className="card-title"> {props.title}</span>
  <h3 className="card-text">{props.seriesName}</h3>
  <a href={props.link} target="_blank"> <button className="btn btn-primary">Watch Now</button></a>
  </div>
 </div>
</div>
</>
);

}

export default Cards