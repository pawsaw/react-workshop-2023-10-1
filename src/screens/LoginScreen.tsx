import { useState } from 'react';
import { useAuthenticatedUser } from '../domain/users/UserContext';
import { useNavigate } from 'react-router-dom';

export const LoginScreen: React.FC = () => {
  const { setAuthenticatedUser } = useAuthenticatedUser();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setAuthenticatedUser({
            name,
          });
          navigate('/books');
        }}
      >
        <input
          placeholder="Username"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};
