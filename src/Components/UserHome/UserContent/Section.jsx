import React,{useState} from 'react'
import { useEffect } from 'react'
import "../../../Css/section.css"
import sample from "../../../images/sample.jpg"
import Userdata from '../../data/Userdata'

const Section = (props) => {
   
   let cur=props.carnow;
   let total=props.total;
   let name=props.name;
//    const [activeParking_id, setparking_id] = useState(1)
const [activeParkingId, setActiveParkingId] = useState(1);
useEffect(() => {
    props.handleChangeActiveParkingId(activeParkingId);
}, [activeParkingId])

   console.log(localStorage.getItem('id'));
  

    return (
        <div className=" mt-4 ">
             {Userdata[0].parkingspace_info.map((item)=>{
                
                 let per=(item.parkingspace_occupiedspace*1.0/item.parkingspace_total_capacity)*100;
                
                return (
                    
                   <a onClick={() =>{setActiveParkingId(item.parkingspace_id)}}>
                    <div className="alert  mb-3 py-4  rounded-pill"  style={{background:"#023E8A"}} >
            <div className="d-flex "> 
          
                <div className="px-3 d-flex">
                <img style={{height:"4rem"}} className='rounded-pill me-2' src={item.parkingspace_imageUrl}></img>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                    <h5 className="alert-heading text-light text-center my-4">{item.pakingspace_name}</h5>      

                
                
                </div>
            
                
            </div>
           <div className="bar mt-1 text-light">
           <div class="progress ">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${per}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="d-flex flex-row">
            <p className='me-auto'>{item.parkingspace_occupiedspace}/{item.parkingspace_total_capacity}</p>
            <p>{per} % occupied</p>
            </div>
           
           </div>
          
                  
                  
        </div>
                   </a>
                )
                }
            )}
       
    </div>
    
    )
}

export default Section
