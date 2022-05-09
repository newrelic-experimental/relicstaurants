import { Drawer } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, StyledHeader } from './app-header-styled';
import Navi from './navi-items';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const onClose = () => {
    setIsSidebarVisible(false);
  };

  const handleSidebarOpen = () => {
    setIsSidebarVisible(true);
  };
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          <div>FoodMe</div>
          <p>byNewRelic</p>
        </Logo>
      </Link>
      <Navi sidebarVisible={handleSidebarOpen} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={isSidebarVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </StyledHeader>
  );
};

export default Header;
