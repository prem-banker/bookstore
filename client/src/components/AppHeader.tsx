import HeaderDropdown from './HeaderDropdown';
import '../assets/css/global.css'
import '../assets/css/AppHeader.css';
import { Link } from 'react-router-dom';
function AppHeader(){
return(


  <header className="header-container">
    
            <Link to='/'>
        <img src={require('../assets/images/site/logo.png')}
        alt="Logo"
      />
      </Link>
            
      
            <div className='search-container'>
                <button type="submit"><i className="fa fa-search"></i></button>
                <p> Search for books here</p>        
            </div>



            <div className="my-list-container">
                {/* <!-- <i className='bx bx-book-heart'></i> --> */}
                <svg className="list-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M3 8v11c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3zm3-4h13v12H5V5c0-.806.55-.988 1-1"/><path fill="currentColor" d="m11.997 14l3.35-3.289a2.129 2.129 0 0 0 0-3.069a2.225 2.225 0 0 0-3.126 0l-.224.218l-.224-.219a2.224 2.224 0 0 0-3.125 0a2.129 2.129 0 0 0 0 3.069z"/></svg>
                <span className='my-list-text'>My List</span>        
            </div>

     
            <div className="shopping-cart"><i className="fas fa-shopping-cart"></i> </div>


            <div className="circle">
                {/* <img src="assets/dp.jpg" alt="Example Image"> */}
            </div>
    
        
    </header>

 
)
}
export default AppHeader;

