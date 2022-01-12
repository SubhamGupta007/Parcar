import React from 'react'
import { GoogleLogout } from 'react-google-login';
import Logo from "../../images/logo.png"

function UserHome(props) {
    // console.log(props.data.userGoogleData.profileObj)
    let handleLoggedOut=(response)=>{
        props.handleLoggedOut(response);
        window.location.reload(true);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
    <div className="wrapper"> </div>
    <div className="container-fluid all-show"> <img src={Logo} style={{height:"50px",width:"120px"}} alt="logo"/>  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item"> <img className='p-1  rounded-circle' style={{height:"35px",width:"35px"}}  src={props.data.userGoogleData.profileObj.imageUrl} alt="googleimage"></img> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Hello , {props.data.userGoogleData.profileObj.givenName} {props.data.userGoogleData.profileObj.familyName}</a> </li>
            </ul>
            <div className="d-flex flex-row sim"> <span> <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={handleLoggedOut}
                >
            </GoogleLogout></span>  </div>
        </div>
    </div>
</nav>  
           
        </div>
    )
}

export default UserHome