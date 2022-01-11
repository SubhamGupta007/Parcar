import {React,useState} from 'react'
import Section from './UserContent/Section'
import Table from './UserContent/Table';
import Data from "../data/Data"
const Bodymain = () => {
    // console.log(Data);
    const carnow=200;
    const total=400;
    const name="Phoenix Market";
   const id=localStorage.getItem('id');
    const [Floor, setFloor] = useState(Data.data[id-1].floor[0]);
    console.log(Data.data[1].floor[0]);
    console.log(id);
    // setFloor(Data.data[1].floor[0])
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
                    {Data.data[0].floor.map((item)=>{
                       return (
                        <div className="col">
                            <button onClick={() => {setFloor(Data.data[id-1].floor[item.floor_no-1])}} className=' btn btn-primary active'>{`Floor ${item.floor_no}`}</button>
                        </div>
                       )
                    }
                    )}

                    </div>
                    <div className="row mt-4">
                    {Floor.section.map((item)=>{
                        return (
                            <div className="col border-end">
                                <h5 style={{color:"#03045E"}}>Section {item.sec_id}</h5>
                                <Table occupied={item.occupied_space} free={item.free_space}/>
                            </div>
                        )
                        
                    })}
                        
                    </div>
                   
                </div>
            </div>
        </div>   
        </>
    )
}

export default Bodymain
