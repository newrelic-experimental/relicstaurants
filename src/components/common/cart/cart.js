import { Button, Drawer, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import { orderList } from 'atoms/order-list.atom';
import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { Message } from '../message';

export const itemQuantity = (list) => {
  let totalItemQuantity = 0;
  list.forEach((item) => (totalItemQuantity += item.count));

  return totalItemQuantity;
};

const Cart = ({ onClose, isSidebarVisible, setIsSidebarVisible }) => {
  const [orderListState, setOrderList] = useRecoilState(orderList);
  const navigate = useNavigate();

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
    <Drawer
      size="large"
      title="Cart"
      placement="right"
      onClose={onClose}
      visible={isSidebarVisible}
    >
      {orderListState.length > 0 ? (
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
                      disabled={totalPrice > 0 ? false : true}
                      primary
                      onClick={() => {
                        navigate(`/payment`, { state: totalPrice });
                        setIsSidebarVisible(false);
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
      ) : (
        <Message>Nothing in cart</Message>
      )}
    </Drawer>
  );
};

export default Cart;
