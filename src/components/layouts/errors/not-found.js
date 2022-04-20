import { Link } from 'react-router-dom';
import { StyledError } from './not-found-styled';

const NotFound = () => {
  return (
    <StyledError>
      <h1>404 not found</h1>
      <Link to="/">Go to the home page</Link>
    </StyledError>
  );
};

export default NotFound;
