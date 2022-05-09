import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { NaviWrapper, IconWrapper } = require('./app-header-styled');

const Navi = ({ sidebarVisible }) => (
  <NaviWrapper>
    <Link to="how-it-works">How it works?</Link>
    <Link to="contact">Contact us</Link>
    <Link to="help">Help</Link>
    <IconWrapper>
      <ShoppingCartOutlined onClick={() => sidebarVisible()} />
    </IconWrapper>
  </NaviWrapper>
);

export default Navi;
