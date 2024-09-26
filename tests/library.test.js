const Library = require('../src/library');
const Book = require('../src/book');

describe('Library Management System', () => {
  test('should add a book to the library', () => {
    const library = new Library();
    const book = new Book('1234', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    
    library.addBook(book);
    
    expect(library.getAvailableBooks()).toContain(book);
  });
  test('should borrow a book from the library', () => {
    const library = new Library();
    const book = new Book('1234', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    
    library.addBook(book);
    library.borrowBook('1234');
    
    expect(book.isAvailable).toBe(false);
  });
  test('should return a borrowed book', () => {
    const library = new Library();
    const book = new Book('1234', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    
    library.addBook(book);
    library.borrowBook('1234');
    library.returnBook('1234');
    
    expect(book.isAvailable).toBe(true);
  });
  
  
});
