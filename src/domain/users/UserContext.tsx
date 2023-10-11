import React, { useContext } from 'react';
import { User } from './User';

export interface AuthenticatedUser {
  user: User | null;
  setAuthenticatedUser: (user: User) => void;
}

class MyAuthenticatedUser implements AuthenticatedUser {
  user: User | null = null;
  setAuthenticatedUser = (user: User) => {
    this.user = user;
  };
}

const AuthenticatedUserContext = React.createContext<AuthenticatedUser>(new MyAuthenticatedUser());

export const AuthenticatedUserProvider: React.FC<{
  children: React.ReactNode;
  user: AuthenticatedUser;
}> = ({ children, user }) => {
  return (
    <AuthenticatedUserContext.Provider value={user}>{children}</AuthenticatedUserContext.Provider>
  );
};

export const useAuthenticatedUser = () => useContext(AuthenticatedUserContext);
