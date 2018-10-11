import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian } from './intefaces';
import { UniversityLibrarian } from './classes'


const GetAllBooks = (): Book[] => {
  let books = [
    {id: 1, title: 'Random Book 1', author: 'James Joyes', available: false, category: Category.Fiction},
    {id: 2, title: 'Random Book 2', author: 'James Joyes', available: false, category: Category.Poetry },
    {id: 3, title: 'Random Book 3', author: 'James Joyes', available: true, category: Category.Fiction}
  ];
  return books;
}

const LogFirstAvailable = (books): void => {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';
  
  for (let currentBook of books) {
    
    if(currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log(`Total Books: is ${numberOfBooks}`);
  console.log(`First Available: ${firstAvailable}`)
}

const GetBookTitleByCategory = (categoryFilter: Category): Array<string> => {
  console.log(`Getting books in category: ${Category[categoryFilter]}`);
  const allBooks = GetAllBooks();
  const filteredTitles: string[] = [];
  for (let currentBook of allBooks) {
    if(currentBook.category === categoryFilter){
      filteredTitles.push(currentBook.title);
    }
  }

  return filteredTitles;
}

const LogBookTitles = (titles: string[]): void => {
  for(let title of titles) {
    console.log(title);
  }
}

const GetBookByID = (id: number) : Book => {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

const CreateCustomerID = (name: string, id: number): string => {
  return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
  console.log(`Creating Customer ${name}`);
  !age || console.log(`Age: ${age}`);
  !city || console.log(`City: ${city}`);
  
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Checking out books for ${customer}`);

  let booksCheckedOut: string[] = [];

  for (let id of bookIDs) {
    let book = GetBookByID(id);
    !book.available || booksCheckedOut.push(book.title);
  }

  return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
  const allBooks = GetAllBooks();
  const foundTitles: string[] = [];

  if (typeof bookProperty == 'string') {
    for (let book of allBooks) {
      if(book.author === bookProperty){
        foundTitles.push(book.title);
      }
    }
  } else if (typeof bookProperty == 'boolean'){
    for(let book of allBooks) {
      if(book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }

  return foundTitles;
}

function PrintBook(book: Book): void {
  console.log(`${book.title} by ${book.author}.`);
}

//************************************************************* */

let myBook: Book = {
  id: 5,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  available: true,
  category: Category.Fiction,
  pages: 250,
  markDamaged: (reason: string) => console.log(reason)
};

let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Lynda');

// PrintBook(myBook);
// myBook.markDamaged('Missing back cover.');

// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
// logDamage('coffee stains.');

// let hermansBooks = GetTitles('James Joyes');
// hermansBooks.forEach(book => console.log(book));

// let myBooks: string[] = CheckoutBooks('Lemmah', 1, 2, 3);
// console.log(myBooks);
// myBooks.forEach(title => console.log(title));

// CreateCustomer('Michelle', null, 'Nairobi');

// let myId: string = CreateCustomerID('James', 2);
// console.log(myId);

// const fictionBooks = GetBookTitleByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val}`));