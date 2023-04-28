import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { PropTypes } from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation()
  if (!user) {
    return <Navigate to="/login"
    state={{pathname: location.pathname}}
    replace
    />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.array.isRequired,
}

export default ProtectedRoute;