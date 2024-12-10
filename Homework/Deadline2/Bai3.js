var Book = /** @class */ (function () {
    function Book(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(books) {
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Added book: ".concat(book.title));
    };
    Library.prototype.removeBook = function (ISBN) {
        var index = -1;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].ISBN === ISBN) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var removedBook = this.books.splice(index, 1)[0];
            console.log("Removed book: ".concat(removedBook.title));
        }
        else {
            console.log("Book with ISBN: ".concat(ISBN, " not found"));
        }
    };
    Library.prototype.findBook = function (title) {
        var foundBook = undefined;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                foundBook = this.books[i];
                break;
            }
        }
        if (foundBook) {
            console.log("Found book: ".concat(foundBook.title));
        }
        else {
            console.log("Book with title: ".concat(title, " not found"));
        }
        return foundBook;
    };
    Library.prototype.showAllBook = function () {
        console.log("All books in library : ");
        var count = 1;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            console.log("".concat(count, ": ").concat(book.title, ", ").concat(book.author, ", ").concat(book.ISBN, " "));
        }
    };
    return Library;
}());
var book1 = new Book("title1", "ntp", "1");
var book2 = new Book("title2", "ntp", "2");
var book3 = new Book("title3", "ntp", "3");
var library = new Library([book1, book2]);
library.addBook(book3);
library.removeBook("2");
library.findBook("title2");
library.showAllBook();
