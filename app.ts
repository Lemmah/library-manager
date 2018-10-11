function GetAllBooks() {

  let books = [
    {id: 1, title: 'Random Book', author: 'James Joyes', available: false, category: Category.Fiction},
    {id: 2, title: 'Random Book', author: 'James Joyes', available: false, category: Category.Poetry },
    {id: 3, title: 'Random Book', author: 'James Joyes', available: true, category: Category.Biography}
  ];
  return books;
}

function LogFirstAvailable(books): void {
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

enum Category { Biography, Poetry, Fiction, History, Children };

function GetBookTitleByCategory(categoryFilter: Category): Array<string> {
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

function LogBookTitles(titles: string[]): void {
  for(let title of titles) {
    console.log(title);
  }
}


const poetryBooks = GetBookTitleByCategory(Category.Poetry);
LogBookTitles(poetryBooks);