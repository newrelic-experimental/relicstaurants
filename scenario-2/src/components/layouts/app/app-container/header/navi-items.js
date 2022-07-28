import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';

const { NaviWrapper, IconWrapper } = require('./app-header-styled');

const Navi = ({ sidebarVisible, orderListLength }) => (
  <NaviWrapper>
    <Link to="how-it-works">How it works?</Link>
    <Link to="contact">Contact us</Link>
    <Link to="help">Help</Link>
    <IconWrapper>
      <Badge count={orderListLength}>
        <ShoppingCartOutlined onClick={() => sidebarVisible()} />
      </Badge>
    </IconWrapper>
  </NaviWrapper>
);

export default Navi;
