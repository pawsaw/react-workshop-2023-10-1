import { Outlet } from 'react-router-dom';

export const BooksScreen: React.FC = () => {
  return (
    <div>
      <h2>Books</h2>
      <Outlet />
    </div>
  );
};
