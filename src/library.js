class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    getAvailableBooks() {
      return this.books.filter(book => book.isAvailable);
    }
    borrowBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book && book.isAvailable) {
          book.isAvailable = false;
        } else {
          throw new Error('Book is not available');
        }
      }
      returnBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book && !book.isAvailable) {
          book.isAvailable = true;
        } else {
          throw new Error('Book was not borrowed');
        }
      }
            

  }
  
  module.exports = Library;
  