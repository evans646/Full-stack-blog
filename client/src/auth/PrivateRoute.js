import { Navigate , Route } from 'react-router-dom';
import { useUser } from './useUser';

export function  PrivateRoute({ props }) {
    const user = useUser();
    return user ? props : <Navigate to="/login" />;
  };



  