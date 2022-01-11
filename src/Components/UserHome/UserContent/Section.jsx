import React from 'react'
import "../../../Css/section.css"
import sample from "../../../images/sample.jpg"
const Section = (props) => {
    console.log(props);
   let cur=props.carnow;
   let total=props.total;
   let name=props.name;
   let per=(cur.carnow/total.total)*100;
   console.log(per);

    return (
        <div className=" mt-4 ">
        <div className="alert  mb-3 py-4  rounded-pill"  style={{background:"#023E8A"}} >
            <div className="d-flex "> 
               
                <div className="px-3 d-flex">
                <img style={{height:"4rem"}} className='rounded-pill me-2' src={sample}></img>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                    <h5 className="alert-heading text-light text-center my-4">{name.name}</h5>      

                
                
                </div>
            
                
            </div>
           <div className="bar mt-1 text-light">
           <div class="progress ">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${per}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="d-flex flex-row">
            <p className='me-auto'>{cur.carnow}/{total.total}</p>
            <p>{per}% occupied</p>
            </div>
           
           </div>
          
                  
                  
        </div>
    </div>
    
    )
}

export default Section
