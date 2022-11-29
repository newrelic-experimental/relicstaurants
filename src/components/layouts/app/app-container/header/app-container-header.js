import { Button, Drawer, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import { orderList } from 'atoms/order-list.atom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Logo, StyledHeader } from './app-header-styled';
import Navi from './navi-items';
import { useNavigate } from 'react-router';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [orderListState, setOrderList] = useRecoilState(orderList);
  const navigate = useNavigate();

  const onClose = () => {
    setIsSidebarVisible(false);
  };
  const handleSidebarOpen = () => {
    setIsSidebarVisible(true);
  };

  const itemQuantity = (list) => {
    let totalItemQuantity = 0;
    list.forEach((item) => (totalItemQuantity += item.count));

    return totalItemQuantity;
  };

  const handleDeleteItem = (clickedRow) => {
    const reducedData = orderListState.filter((item) =>
      item.name === clickedRow.name ? false : true
    );
    setOrderList(reducedData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Delete',
      render: (clickedRow) => (
        <Button onClick={() => handleDeleteItem(clickedRow)}>-</Button>
      ),
    },
  ];

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
            let totalPrice = 0;

            pageData.forEach(
              ({ price, count }) => (totalPrice += price * count)
            );

            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={2}>Total</Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Text type="danger">{totalPrice.toFixed(2)}</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={3}>
                    <Button
                      disabled={totalPrice > 0 ? false : true}
                      primary
                      onClick={() => {
                        setOrderList([]);
                        setIsSidebarVisible(false);
                      }}
                    >
                      Clear Cart
                    </Button>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Button
                      id="pay"
                      primary
                      onClick={() => {
                        if (!(totalPrice > 0)) {
                          var err = new Error('Cart cannot be empty!');
                          newrelic.noticeError(err); 
                          alert(err)
                          navigate('/')
                          setIsSidebarVisible(false);
                        } else {
                        navigate(`/payment`, { state: totalPrice });
                        setIsSidebarVisible(false);
                        }
                      }}
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
