import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


//homepage 
import Header from './Components/Home/Header';
import Contact from './Components/Home/Contact';
import Footer from './Components/Home/Footer';
import Banner from './Components/Home/Banner';
import Whyus from './Components/Home/Whyus';
import Services from './Components/Home/Services';
import Team from './Components/Home/Team';

//registration page
import Form from './Components/Register/Form';

//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//User Home page
import UserHome from './Components/UserHome/UserHome'
import Bodymain from './Components/UserHome/Bodymain';

//Api data 
import Data from "../src/Components/data/Data"


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userGoogleData, setUserGoogleData] = useState()
  console.log(Data);
  let handleLoggedIn=(response)=>{
    setUserGoogleData(response);
    setIsUserLoggedIn(true);
  }
  let handleLoggedOut=(response)=>{
    console.log(response);
    setIsUserLoggedIn(false);
    window.location.reload(true);
  }
  if(isUserLoggedIn){
    return (
      <>
           <UserHome data={{userGoogleData}}/>
           <Bodymain/>
           </>
    )
  }
  else{
   return (
      <>
       <Routes>
            <Route exact path="/" element={
              <>  
                <Header handleLoggedIn={handleLoggedIn}/>
                <Banner/>
                <Whyus/>
                <Services/>
                <Team/>
                <Contact/>
                <Footer/>
              </>}>

            </Route>
            <Route exact path="/register" element={
              <>  
              <Header handleLoggedIn={handleLoggedIn}/>
              <Form/>
              <Footer/>
              </>}>

            </Route>
         
        </Routes>
      </>
    );
  }
}

export default App;
