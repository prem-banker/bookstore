import '../types';
import { BookItem, bookList } from "../types";
import Book from './Book';
import '../assets/css/BookList.css';

function BookList() {
  return (
    <div className="books">
        {bookList.map((book:BookItem) => (
                  <Book key={book.bookId}  img={book.img} bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author}/>))}

 </div>
)
}

export default BookList;
