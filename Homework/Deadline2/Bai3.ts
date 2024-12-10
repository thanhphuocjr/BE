class Book {
    title: string;
    author: string;
    ISBN: string;

    constructor(title: string, author: string, ISBN: string) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}

class Library {
    books: Book[];
    constructor(books: Book[]) {
        this.books = books;
    }
    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }

    removeBook(ISBN: string): void {
        let index = -1;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].ISBN === ISBN) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`Removed book: ${removedBook.title}`);
        } else {
            console.log(`Book with ISBN: ${ISBN} not found`);
        }
    }

    findBook(title: string): Book | undefined {
        let foundBook: Book | undefined = undefined;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                foundBook = this.books[i];
                break;
            }
        }
        if (foundBook) {
            console.log(`Found book: ${foundBook.title}`);
        } else {
            console.log(`Book with title: ${title} not found`);
        }
        return foundBook;
    }

    showAllBook(): void {
        console.log("All books in library : ")
        let count=1;
        for(const book of this.books){
            console.log(`${count}: ${book.title}, ${book.author}, ${book.ISBN} ` );
        }
    }
}

const book1= new Book("title1", "ntp","1");
const book2= new Book("title2", "ntp","2");
const book3= new Book("title3", "ntp","3");

const library= new Library([book1, book2]);
library.addBook(book3);
library.removeBook("2"); 
library.findBook("title2")
library.showAllBook();

