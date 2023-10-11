import { useState, useEffect } from 'react';
import { Book, ISBN } from './Book';

export function useBook(isbn: ISBN): Book | null {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4730/books/${isbn}`)
      .then((response) => response.json())
      .then((_book) => setBook(_book));
  }, [isbn]);

  return book;
}
