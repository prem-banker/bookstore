import '../assets/css/Book.css';
import '../assets/images/books/book1.jpg';

import '../types';
import { BookItem } from "../types";



function Book(props:BookItem) {


  return (
    <div className="single-book">
      <div className="book-img-container">
      {/* src={require('../assets/images/books/' */}
      
      
        <img className="book-img"  src={require('../assets/images/books/' + props.img)}  alt="Book Cover" />
      </div>

      <div className="book-info">
        <div>
          <div style={{ color: 'white', fontSize: '28px' }}>{props.title}</div>

          <div className="author-info">
            <i className="fas fa-edit"></i>
            <div className="author-name">{props.author}</div>
          </div>

          <div className="book-price">{props.price}</div>

          <div className="book-ctas">
            <button className="add-to-cart-btn">
              <i className="fas fa-cart-plus"></i> Add to Cart
            </button>

            <div>
            {props.isPublic && <button className="read-now-btn">Read Now</button> }
            </div>

            

            
          </div>
        </div>
      </div>
    </div>
  );

}
export default Book;

