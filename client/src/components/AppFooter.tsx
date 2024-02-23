import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import {Link} from "react-router-dom";


function AppFooter(){
return(


  <footer className="footer-container">


        <div className="copyright-content">


            <img src={require('../assets/images/site/logo.png')}
        alt="Logo"
      />

            <div className='copyright-text'>&copy; 2024 Kahaniyan Books. All Rights Reserved.</div>

            <div className="social-icons">
                <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>


        <div>
            <div className='footer-title'> Important links</div>
            <div className='footer-link'> General Info</div>
            <div className='footer-link'>Privacy Policy</div>
            <div className='footer-link'>Terms of Service</div>
        </div>

        <div>
            <div className='footer-title'> Contact Us</div>
            <div className='footer-link'> support@kahaniyan.com</div>
            <div className='footer-link'>(999) 123-4567</div>
        </div>

        <div>
            <div className='footer-title'> Location</div>
            <div className='footer-link'> 7054 Haycock Road</div>
            <div className='footer-link'>Fallschurch VA 22003</div>
        </div>
   
        
    </footer>
//   <footer className="container">
//   <section className="links">
//       <Link to="/category">about</Link>
//       <Link to="/">contact</Link>
//       <Link to="/">directions</Link>
//   </section>
//   <section className="social-media-icons">
//     <Link to="/" className="button">Facebook</Link>
//     <Link to="/" className="button">Twitter</Link>
//   </section>
// </footer>

) 
}
  


export default AppFooter;


