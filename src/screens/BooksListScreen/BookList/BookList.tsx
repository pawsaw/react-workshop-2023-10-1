import { Book, useBooks } from '../../../domain/books';
import { BookListItem, BookListItemProps } from './BookListItem/BookListItem';

export interface BookListProps {
  books: Book[];
  onBookDetailsSelected: BookListItemProps['onBookDetailsSelected'];
}

export const BookList: React.FC<BookListProps> = ({ books, onBookDetailsSelected }) => {
  return (
    <div>
      <h2>Book List</h2>
      <div>
        {books.map((book) => (
          <BookListItem key={book.isbn} book={book} onBookDetailsSelected={onBookDetailsSelected} />
        ))}
      </div>
    </div>
  );
};
