import React from 'react'
import "../../Css/banner.css"
import bannerimg from "../../images/Parking-amico.png"
const Banner = () => {
    return (
        <>
          
<header class="masthead">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 py-5">
                <h1 class="mb-4">Parcar is a parking management system!</h1>
                <h2 class="m-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
            </div>
            <div class="col-lg-6 justify-content-center align-items-center px-3"  >
                <div class="py-5  masthead-cards text-center">
                    
                   <img src={bannerimg}  alt="bannerimage"></img>
                 
                    <div class="shape"></div>
                </div>
            </div>
        </div>
    </div>
    
</header>  
        </>
    )
}

export default Banner
