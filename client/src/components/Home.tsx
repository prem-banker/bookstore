
import HomeCategoryList from './HomeCategoryList';
import '../assets/css/global.css';
import '../assets/css/Home.css'
import homehero from '../assets/images/home/homehero.svg'; 
import { Link } from 'react-router-dom';



function Home() {
    return (
        <div className='home-page-container'>
            <div className="category-container">
                <Link to='/categories' style={{ textDecoration: 'none' }}><div className="category">Detective</div></Link>
                <Link to='/categories' style={{ textDecoration: 'none' }}><div className="category">Love</div></Link>
                <Link to='/categories' style={{ textDecoration: 'none' }}><div className="category">Novel</div></Link>
                <Link to='/categories' style={{ textDecoration: 'none' }}><div className="category">History</div></Link>
                <Link to='/categories' style={{ textDecoration: 'none' }}><div className="category">Sci-Fi</div></Link>
                <Link to='/categories' style={{ textDecoration: 'none' }}><div className="category">Fantastic</div></Link>
                <Link to='/categories' style={{ textDecoration: 'none' }}><div className="category">More <span>&#9660; </span></div></Link>
            </div>

            <div className="home-container">

            <img src={homehero}
                alt="Home hero"
            />
        
            <div className="home-content">
                <div>DISCOVER <span className="golden-span">STORIES</span> WITHIN PAGES OF 
                    BOOKS</div>

                    <button className="buy-now-cta">Buy now</button>
            </div>
        </div>

        </div>
        

       
    )
}

export default Home;


// <div classNameName="home-pages">
        //     <div classNameName="welcome-text flow-content container dark-background">
        //         <h2>Welcome to Another Bookstore</h2>
        //         <p>
        //             Another Bookstore is a client-side application written using Vue
        //             components.
        //         </p>
        //         <p>
        //             It includes a home page and a category page. Both pages have the same
        //             header and footer.
        //         </p>
        //         <p>
        //             You can navigate to the category page by choosing any category from the
        //             dropdown menu in the header. You can navigate to the home page by
        //             clicking on the logo in the header.
        //         </p>
        //         <p>Take some time and explore the code.</p>
        //     </div>
        //     <div classNameName="category-images container">
        //        <HomeCategoryList />
        //     </div>
        // </div>