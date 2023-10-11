import { useParams } from 'react-router-dom';
import { ISBN } from '../../domain/books';
import { useBook } from '../../domain/books/useBook';
import { BookEditForm, BookEditFormProps } from './BookEditForm';
import { useCallback } from 'react';

export type BookEditScreenParams = {
  isbn: ISBN;
};

export const BookEditScreen: React.FC = () => {
  const { isbn } = useParams<BookEditScreenParams>();
  const book = useBook(isbn!);

  const onBookEdited: BookEditFormProps['onBookEdited'] = useCallback((book) => {
    console.log(book);
  }, []);

  return (
    <div>
      {book ? (
        <BookEditForm book={book} onBookEdited={onBookEdited} />
      ) : (
        <span>Loading book...</span>
      )}
    </div>
  );
};
