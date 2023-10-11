import { ChangeEvent, useCallback, useState } from 'react';
import { Book } from '../../domain/books';

export interface BookEditFormProps {
  book: Book;
  onBookEdited: (book: Book) => void;
}

export const BookEditForm: React.FC<BookEditFormProps> = ({ book: initialBook, onBookEdited }) => {
  const [book, setBook] = useState<Book>(initialBook);

  const onSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      onBookEdited(book);
    },
    [book, onBookEdited],
  );

  const onBookChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setBook({
        ...book,
        [name]: value,
      });
    },
    [book],
  );

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label htmlFor="title">Title:</label>
        <input
          value={book.title}
          onChange={onBookChanged}
          name="title"
          id="title"
          placeholder="Title"
        />
      </p>
      <p>
        <label htmlFor="abstract">Abstract:</label>
        <input
          value={book.abstract}
          onChange={onBookChanged}
          name="abstract"
          id="abstract"
          placeholder="Abstract"
        />
      </p>
      <p>
        <button>Save changes</button>
      </p>
    </form>
  );
};
