import { orderList } from 'atoms/order-list.atom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Logo, StyledHeader } from './app-header-styled';
import Navi from './navi-items';
import Cart, { itemQuantity } from 'components/common/cart/cart';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [orderListState] = useRecoilState(orderList);
  console.log(orderListState);

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
          <div>Relicstaurants</div>
          <p>by New Relic</p>
        </Logo>
      </Link>
      <Navi
        sidebarVisible={handleSidebarOpen}
        orderListLength={itemQuantity(orderListState)}
      />
      <Cart
        onClose={onClose}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </StyledHeader>
  );
};

export default Header;
