import { useRouteError } from 'react-router-dom';

export const ErrorScreen: React.FC = () => {
  const foo = useRouteError();

  return (
    <div className="error-screen">
      <h1>Oops, something went wrong...</h1>
    </div>
  );
};
