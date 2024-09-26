class Book {
    constructor(isbn, title, author, year) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.year = year;
      this.isAvailable = true;  // By default, a new book is available
    }
  }
  
  module.exports = Book;
  