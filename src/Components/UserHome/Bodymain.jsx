import React from 'react'
import Section from './UserContent/Section'
import Table from './UserContent/Table';
const Bodymain = () => {
    const carnow=200;
    const total=400;
    const name="Phoenix Market";

    const floors=4;

    return (
        <>
         <div className="container">
            <div className="row">
                <div className="col-lg-4  col-md-12 justify-content-left ">
                    <Section total={{total}} carnow={{carnow}} name={{name}}/>
                    
                </div>
                <div className="col-8 text-center mt-3" >
                    <h3 style={{color:"#03045E"}}>{name}</h3>
                    <div className="row mt-4 text-info" >
                            <div className="col">
                                <h5 className='  active'>Floor1</h5>
                            </div>
                            <div className="col">
                                <h5>Floor2</h5>
                            </div>
                            <div className="col">
                                <h5>Floor3</h5>
                            </div>
                            <div className="col">
                                <h5>Floor4</h5>
                            </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col border-end">
                            
                            <Table/>
                        </div>
                        <div className="col  border-end">
                        
                            <Table/>
                        </div>
                        <div className="col  border-end">
                       
                            <Table/>
                        </div>
                        <div className="col">
                       
                            <Table/>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>   
        </>
    )
}

export default Bodymain
