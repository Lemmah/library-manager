import { Book, DamageLogger, Author, Librarian } from './intefaces';


class UniversityLibrarian implements Librarian {

  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

class ReferenceItem {

  private _publisher: string;
  static department: string = 'Research';

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  printItem() {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}.`);
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string){
    this._publisher = newPublisher;
  }
}

class Encyclopedia extends ReferenceItem {

   constructor(title: string, year: number, public edition: number) {
    super(title, year);
   }

   printItem(): void {
     super.printItem();
     console.log(`Edition: ${this.edition} (${this.year}).`);
   }

}

export { UniversityLibrarian, ReferenceItem, Encyclopedia };