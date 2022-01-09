import './App.css';
import React, { useState } from 'react';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import Banner from './Components/Home/Banner';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserHome from './Components/UserHome/UserHome'
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userGoogleData, setUserGoogleData] = useState()
  let handleLoggedIn=(response)=>{
    setUserGoogleData(response);
    setIsUserLoggedIn(true);
  }
  if(isUserLoggedIn){
    return <UserHome/>
  }
  else{
   return (
      <div className="App">
      <Header handleLoggedIn={handleLoggedIn}/>
      <Banner/>
      <Footer/>
      </div>
    );
  }
}

export default App;
