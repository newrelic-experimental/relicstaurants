import { Button, Drawer, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import { orderList } from 'atoms/order-list.atom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Logo, StyledHeader } from './app-header-styled';
import Navi from './navi-items';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [orderListState, setOrderList] = useRecoilState(orderList);
  console.log({ orderListState });

  const onClose = () => {
    setIsSidebarVisible(false);
  };

  const handleSidebarOpen = () => {
    setIsSidebarVisible(true);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          <div>FoodMe</div>
          <p>byNewRelic</p>
        </Logo>
      </Link>
      <Navi
        sidebarVisible={handleSidebarOpen}
        orderListLength={orderListState.length}
      />
      <Drawer
        size="large"
        title="Cart"
        placement="right"
        onClose={onClose}
        visible={isSidebarVisible}
      >
        <Table
          dataSource={orderListState}
          columns={columns}
          pagination={false}
          summary={(pageData) => {
            console.log({ pageData });
            let totalPrice = 0;

            pageData.forEach(({ price }) => (totalPrice += price));

            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell>Total</Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Text type="danger">{totalPrice.toFixed()}</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell>
                    <Button
                      disabled={totalPrice > 0 ? false : true}
                      primary
                      onClick={() => {
                        setOrderList([]);
                        setIsSidebarVisible(false);
                      }}
                    >
                      Clean cart
                    </Button>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Button
                      disabled={totalPrice > 0 ? false : true}
                      primary
                      onClick={() => console.log({ totalPrice })}
                    >
                      PAY
                    </Button>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </Drawer>
    </StyledHeader>
  );
};

export default Header;
