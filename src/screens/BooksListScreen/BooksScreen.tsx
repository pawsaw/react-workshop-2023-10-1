import { BookList, BookListProps } from './BookList/BookList';
import { useBooks } from '../../domain/books';
import { useNavigate } from 'react-router-dom';

export const BooksListScreen: React.FC = () => {
  const books = useBooks();
  const navigation = useNavigate();

  const onBookDetailsSelected: BookListProps['onBookDetailsSelected'] = (book) => {
    navigation(book.isbn);
  };

  return (
    <div>
      {books ? (
        <BookList books={books} onBookDetailsSelected={onBookDetailsSelected} />
      ) : (
        <span>Loading books...</span>
      )}
    </div>
  );
};
