import React from 'react'
import '../../Css/header.css'
import Logo from "../../images/logo.png"

const Header = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
    <div className="wrapper"> </div>
    <div className="container-fluid all-show"> <a className="navbar-brand" href="#"><img src={Logo} style={{height:"50px",width:"120px"}} alt="logo"/> </a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">About us</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Products</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Services</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">BUY/REGISTER</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">contact</a> </li>
               
            </ul>
            <div className="d-flex flex-column sim"> <span>Login</span> <small className="text-primary">if already registered</small> </div>
        </div>
    </div>
</nav>  

        </>
    )
}

export default Header
