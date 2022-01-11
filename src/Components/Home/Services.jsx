import React from 'react'
import RubberBand from 'react-reveal/RubberBand';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Services = () => {
    return (
        <>
          <div className="container text-center">
              <h1 className=' fa-bold fw-bold mb-5 mt-5' style={{color:"#03045E"}}>What do we do?</h1>
            <div className="row">
                <div className="col-lg-5 text-lg-start text-primary" style={{color:"#0077B6"}}>
                    <RubberBand>
                    <h2 style={{color:"#023E8A"}}>Realtime Parking Management</h2>
                    </RubberBand>
                    <RubberBand>
                    <h2 style={{color:"#023E8A"}}>Camera and Equipments Installation</h2>
                   </RubberBand>
                   <RubberBand>
                    <h2 style={{color:"#023E8A"}}>Live Parking Status</h2>
                    </RubberBand>
                    <RubberBand>
                    <h2 style={{color:"#023E8A"}}>Future Prediction</h2>
                    </RubberBand>
                </div>
                <div className="col-lg-6">
                  <Carousel>
                    <div>
                      <img src="https://justpaste.it/img/dc31eb8a8d5ab5f42db9038b1310aa34.png" />
                      
                    </div>
                    <div>
                      <img src="https://miro.medium.com/max/1400/1*CwuEQTbZpBbzaRxPkWAW7Q.jpeg" />
                      
                    </div>
                    <div>
                      <img src="https://www.plasmacomp.com/wp-content/uploads/2016/06/Smart-Parking-Solution-1-1024x507.jpg" />
                    
                    </div>
                  </Carousel>
                </div>
            </div>
          </div>  
        </>
    )
}

export default Services
