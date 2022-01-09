import React from 'react'
import { GoogleLogout } from 'react-google-login';

function UserHome(props) {
    let handleLoggedOut=(response)=>{
        props.handleLoggedOut(response);
    }
    return (
        <div>
            henlo noob
            <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={handleLoggedOut}
                >
            </GoogleLogout>
        </div>
    )
}

export default UserHome
