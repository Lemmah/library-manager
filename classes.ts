import { Book, DamageLogger, Author, Librarian } from './intefaces';


class UniversityLibrarian implements Librarian {

  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

export { UniversityLibrarian };