import { Drawer } from 'antd';
import { orderList } from 'atoms/order-list.atom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Logo, StyledHeader } from './app-header-styled';
import Navi from './navi-items';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const orderListState = useRecoilValue(orderList);

  console.log({ orderListState });

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
        title="Cart"
        placement="right"
        onClose={onClose}
        visible={isSidebarVisible}
      >
        {orderListState.map((item) => (
          <ul>
            <li>
              {item.name}
              {item.price}
            </li>
          </ul>
        ))}
      </Drawer>
    </StyledHeader>
  );
};

export default Header;
