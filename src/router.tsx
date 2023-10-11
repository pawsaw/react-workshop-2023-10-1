import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { ErrorScreen } from './screens/ErrorScreen';
import { BooksScreen } from './screens/BooksScreen/BooksScreen';
import { AboutScreen } from './screens/AboutScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { BooksListScreen } from './screens/BooksListScreen';
import { BookEditScreen } from './screens/BookEditScreen/BookEditScreen';
import { LoginScreen } from './screens/LoginScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: 'login',
        element: <LoginScreen />,
      },
      {
        path: 'books',
        element: <BooksScreen />,
        children: [
          {
            path: ':isbn/edit',
            element: <BookEditScreen />,
          },
          {
            path: ':isbn',
            element: <BookDetailScreen />,
          },
          {
            path: '',
            element: <BooksListScreen />,
          },
        ],
      },
      {
        path: 'about',
        element: <AboutScreen />,
      },
      {
        path: '',
        loader: () => redirect('/books'),
      },
    ],
  },
]);
