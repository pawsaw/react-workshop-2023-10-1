import { Link, Outlet } from 'react-router-dom';
import { useState, useRef } from 'react';
import {
  AuthenticatedUser,
  AuthenticatedUserProvider,
  useAuthenticatedUser,
} from './domain/users/UserContext';
import { User } from './domain/users/User';

const Counter = () => {
  // const [value, setValue] = useState(0);
  const valueRef = useRef(0);

  return (
    <div>
      <button
        onClick={() => {
          valueRef.current--;
          console.log(valueRef.current);
        }}
      >
        -
      </button>
      {valueRef.current}
      <button
        onClick={() => {
          valueRef.current++;
          console.log(valueRef.current);
        }}
      >
        +
      </button>
    </div>
  );
};

const MyNavigation = () => {
  const { user } = useAuthenticatedUser();
  return (
    <nav>
      <a href="/books">Books</a> | <a href="/about">About</a> | user:{' '}
      {user ? (
        user.name
      ) : (
        <>
          <span>anonymous</span>
          <Link to="login">Login</Link>
        </>
      )}
    </nav>
  );
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  const authenticatedUser: AuthenticatedUser = {
    user,
    setAuthenticatedUser: (_user) => setUser(user),
  };

  return (
    <AuthenticatedUserProvider user={authenticatedUser}>
      <MyNavigation />
      <main>
        <h1>Book Manager</h1>
        <div>
          <Counter />
          <Counter />

          <Outlet />
        </div>
      </main>
    </AuthenticatedUserProvider>
  );
}

export default App;
