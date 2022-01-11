import React from 'react'
import "../../Css/footer.css"
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillMail} from "react-icons/ai"
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
    return (
        <>
          


          <footer class="new_footer_area bg_color">

            <div class="new_footer_top">
                <div class="container">
                <ScrollToTop smooth color="blue" />
                    <div class="row">
                        <div class="col-lg-6 col-md-6 ">
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <p>Phone:+91xxxxx</p>
                                <p>Email: Parcargementmana@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 text-center">
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s"  style={{visibility: "visible",animationDelay: "0.8s", animationName: "fadeInLeft"}}>
                                <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div class="f_social_icon">
                                  <AiFillLinkedin size={32} color="blue"/>
                                  <AiFillFacebook size={32} color="blue"/>
                                  <AiFillInstagram size={32} color="blue"/>
                                  <AiFillMail size={32} color="blue"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            
            
        </footer>
        </>
    )
}

export default Footer
