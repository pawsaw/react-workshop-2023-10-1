import { ISBN } from '../domain/books';
import { useBook } from '../domain/books/useBook';
import { Link, useParams } from 'react-router-dom';

export type BookDetailScreenParams = { isbn: ISBN };

export const BookDetailScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailScreenParams>();
  const book = useBook(isbn!);
  return (
    <div>
      <code>
        <pre>{JSON.stringify(book, undefined, 4)}</pre>
      </code>
      <Link to="edit">Edit</Link>
    </div>
  );
};
