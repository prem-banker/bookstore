// Contains all the custom types we want to use for our application
import Classics from './assets/images/categories/classics.jpg';
import Fantasy from './assets/images/categories/fantasy.jpg';
import Mystery from './assets/images/categories/mystery.jpg';
import Romance from './assets/images/categories/romance.jpg';
export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: string;
  img: string;
  isPublic: boolean;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}
export const categoryImages: Record<string, any> = {
  classics: Classics,
  fantasy : Fantasy,
  mystery : Mystery,
  romance : Romance
};
export const categoryList = [
  { categoryId: 1001, name: "Classics" },
  { categoryId: 1002, name: "Fantasy" },
  { categoryId: 1003, name: "Mystery" },
  { categoryId: 1004, name: "Romance" },
];

export const bookList = [
  {
    bookId: 1001,
    title: "Habits of household",
    author: "Justin Earley",
    price: '$ 18.99',
    img: 'book1.jpg',
    isPublic: true,
  },
  {
    bookId: 1002,
    title: "Principles of Parenting",
    author: "Dr. Aliza Presman",
    price: '$ 9.99',
    img: 'book2.jpg',
    isPublic: false,
  },
];