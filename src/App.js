import './App.css';
import React, { useState } from 'react';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import Banner from './Components/Home/Banner';
import Form from './Components/Register/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserHome from './Components/UserHome/UserHome'
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userGoogleData, setUserGoogleData] = useState()
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
    return <UserHome handleLoggedOut={handleLoggedOut}/>
  }
  else{
   return (
      <div className="App">
      <Header handleLoggedIn={handleLoggedIn}/>
      <Banner/>
      <Form/>
      <Footer/>
      </div>
    );
  }
}

export default App;
