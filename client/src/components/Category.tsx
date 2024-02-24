import '../assets/css/Category.css';
import '../types';
import BookList from './BookList';

function Category() {
    return (
        <div className="category-container">

            <div className="categories">

                <div className="scrollable-cats">


                    <div className="cat-search-container">
                        <button type="submit"><i className="fa fa-search"></i></button>
                        <p style={{fontSize: '14px' }}> Search for books here</p>
                    </div>

                    <div style={{ marginLeft: '12px' }}>
                        <div className="pop-cat">Popular categories</div>
                        <div className="checkbox-group" style={{ marginTop: '8px' }}>
                            <label htmlFor="option1">
                                <input type="checkbox" id="option1" />
                                Horror
                            </label>
                            <label htmlFor="option2">
                                <input type="checkbox" id="option2" />
                                Romance
                            </label>
                            <label htmlFor="option3">
                                <input type="checkbox" id="option3" />
                                Political
                            </label>
                            <label htmlFor="option4">
                                <input type="checkbox" id="option4" />
                                Comedy
                            </label>
                        </div>
                    </div>




                </div>

                

            </div>

            <BookList/>
        </div>

    )
}

export default Category;




{/* //   <><CategoryNav/>
    //       <ul classNameName="book-lists">
    //           {bookList.map((book:BookItem) => (
    //               <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author}/>))}
    //       </ul>
    //   </> */}