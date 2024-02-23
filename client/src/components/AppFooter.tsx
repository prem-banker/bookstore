import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import {Link} from "react-router-dom";


function AppFooter(){
return(
  <footer className="container">
  <section className="links">
      <Link to="/category">about</Link>
      <Link to="/">contact</Link>
      <Link to="/">directions</Link>
  </section>
  <section className="social-media-icons">
    <Link to="/" className="button">Facebook</Link>
    <Link to="/" className="button">Twitter</Link>
  </section>
</footer>

) 
}
  // <footer className="footer-container">


  //       <div className="copyright-content">
  //           <img src="assets/logo.png" alt="Logo">

  //           <div style="margin-top: 10px;">&copy; 2024 Kahaniyan Books. All Rights Reserved.</div>

  //           <div className="social-icons">
  //               <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
  //               <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
  //               <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin-in"></i></a>
  //           </div>
  //       </div>


  //       <div>
  //           <div style="color: #D5B263; font-size: 20px;"> Important links</div>
  //           <div style="margin-top: 12px; color: white; font-size: 18px;"> General Info</div>
  //           <div style="margin-top: 6px; color: white; font-size: 18px;">Privacy Policy</div>
  //           <div style="margin-top: 6px; color: white; font-size: 18px;">Terms of Service</div>
  //       </div>

  //       <div>
  //           <div style="color: #D5B263; font-size: 20px;"> Contact Us</div>
  //           <div style="margin-top: 12px; color: white; font-size: 18px;"> support@kahaniyan.com</div>
  //           <div style="margin-top: 6px; color: white; font-size: 18px;">(999) 123-4567</div>
  //       </div>

  //       <div>
  //           <div style="color: #D5B263; font-size: 20px;"> Location</div>
  //           <div style="margin-top: 12px; color: white; font-size: 18px;"> 7054 Haycock Road</div>
  //           <div style="margin-top: 6px; color: white; font-size: 18px;">Fallschurch VA 22003</div>
  //       </div>
   
        
  //   </footer>


export default AppFooter;


