import { useState, useEffect } from 'react';
import { Book } from './Book';

export function useBooks(): Book[] | null {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:4730/books')
      .then((response) => response.json())
      .then((_books) => setBooks(_books));
  }, []);

  return books;
}
