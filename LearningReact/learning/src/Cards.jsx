import React from 'react';

function Cards(props){


return(
<> 
<div  className="cards">
 <div className="card">
  <img src={props.imgSource} alt="No Image" className="card__img"/>
  <div className="card__info">
  <span className="card__category"> {props.title}</span>
  <h3 className="card__title">{props.seriesName}</h3>
  <a href={props.link} target="_blank"> <button>Watch Now</button></a>
  </div>
 </div>
</div>
</>
);

}

export default Cards