import React from 'react'
import car from "../../../images/car.png"
import empty from "../../../images/empty.png"
const Table = (props) => {
  console.log(props);
  var rows = [], i = 0, len = Math.ceil(props.occupied/2);
  
  var cols=[],j=0, len2=Math.ceil((props.free)/2);
  while (++i <= len) rows.push(i);
  while (++j <= len2) cols.push(j);
    return (
        <>
        <p style={{color:"#03045E"}}>Occupied: {props.occupied}  Free: {props.free}</p>
 <table class="table">
 
  <tbody>

 
  
    {rows.map(function (i) {
    return(  <tr>
     <td><img style={{height:"2rem"}} src="https://freesvg.org/img/wolf.png"></img></td>
   
     <td><img style={{height:"2rem"}} src="https://freesvg.org/img/wolf.png"></img></td>
   
    
      </tr>)
    })}
    {cols.map(function (j) {
    return(  <tr>
     <td><img  style={{height:"1rem"}} src={empty}/></td>
   
     <td><img  style={{height:"1rem"}} src={empty}/></td>
    
      </tr>)
    })}
   
     
    
  
  </tbody>
</table>  
        </>
    )
}

export default Table
