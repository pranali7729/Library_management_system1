const Book = require('../src/book');

describe('Book entity', () => {
  test('should create a new book with correct properties', () => {
    const book = new Book('1234', 'JavaScript: The Good Parts', 'Douglas Crockford', 2008);
    
    expect(book.isbn).toBe('1234');
    expect(book.title).toBe('JavaScript: The Good Parts');
    expect(book.author).toBe('Douglas Crockford');
    expect(book.year).toBe(2008);
    expect(book.isAvailable).toBe(true); // New book should be available
  });
});
