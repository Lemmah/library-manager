function GetAllBooks() {
  let books = [
    {title: 'Random Book', author: 'James Joyes', available: false},
    {title: 'Random Book', author: 'James Joyes', available: false},
    {title: 'Random Book', author: 'James Joyes', available: true}
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

LogFirstAvailable(GetAllBooks());