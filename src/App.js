import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import Banner from './Components/Home/Banner';
import Form from './Components/Register/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserHome from './Components/UserHome/UserHome'
import Bodymain from './Components/UserHome/Bodymain';
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userGoogleData, setUserGoogleData] = useState()
  let handleLoggedIn=(response)=>{
    setUserGoogleData(response);
    setIsUserLoggedIn(true);
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
