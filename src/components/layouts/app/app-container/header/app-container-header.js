import { Link } from 'react-router-dom';
import { Logo, StyledHeader } from './app-header-styled';
import Navi from './navi-items';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          <div>FoodMe</div>
          <p>byNewRelic</p>
        </Logo>
      </Link>
      <Navi />
    </StyledHeader>
  );
};

export default Header;
