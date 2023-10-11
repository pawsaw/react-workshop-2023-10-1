import { Book } from '../../../../domain/books';

export interface BookListItemProps {
  book: Book;
  onBookDetailsSelected: (book: Book) => void;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookDetailsSelected }) => {
  return (
    <div>
      <div>{book.title}</div>
      <a
        href="http://"
        onClick={(event) => {
          event.preventDefault();
          onBookDetailsSelected(book);
        }}
      >
        Details
      </a>
    </div>
  );
};
