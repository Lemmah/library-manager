import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './intefaces';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge} from './lib/utilityFunctions';
import Shelf from './shelf'


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

let inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'The C Programming Language 11', author: 'K & R', available: true, category: Category.Software },
  { id: 12, title: 'The C Programming Language 12', author: 'K & R', available: true, category: Category.Software },
  { id: 13, title: 'The C Programming Language 13', author: 'K & R', available: true, category: Category.Software },
  { id: 14, title: 'The C Programming Language 14', author: 'K & R', available: true, category: Category.Software },
];

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();
console.log(firstBook);

let magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly 1', publisher: 'Code Mags' },
  { title: 'Programming Language Monthly 2', publisher: 'Code Mags' },
  { title: 'Programming Language Monthly 3', publisher: 'Code Mags' }
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));

let firstMagazine: Magazine = magazineShelf.getFirst();
console.log(firstMagazine);

// let purgedBooks: Array<Book> = Purge<Book>(inventory);
// console.log(purgedBooks);

// let purgedNums: Array<number> = Purge<number>([1, 2, 3, 4, 5]);
// console.log(purgedNums);

// let purgedBooks: Book[] = Purge<Book>(GetAllBooks());
// console.log(purgedBooks);

// let Newspaper = class extends ReferenceItem {
//   printCitation(): void {
//     console.log(`Newspaper: ${this.title}.`);
//   }
// }

// let myPaper: ReferenceItem = new Newspaper('The Gazzette', 2016);
// myPaper.printCitation();

// class Novel extends class { title: string } {
//   mainCharacter: string;
// }

// let novel: Novel = new Novel();
// novel.title = 'The River and the Source.';
// novel.mainCharacter = 'Akoko';
// console.log(novel);

// let refBook: Encyclopedia = new Encyclopedia('The Great Encyclopedia', 2019, 10);
// refBook.printItem();
// console.log(`${refBook.title}, ${refBook.edition}.`);

// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2016);
// ref.publisher = 'Lemmah';
// console.log(ref.publisher);
// ref.printItem();

// let myBook: Book = {
//   id: 5,
//   title: 'Pride and Prejudice',
//   author: 'Jane Austen',
//   available: true,
//   category: Category.Fiction,
//   pages: 250,
//   markDamaged: (reason: string) => console.log(reason)
// };

// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');

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