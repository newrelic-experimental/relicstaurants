const { atom } = require('recoil');

export const orderList = atom({
  key: 'OrderList',
  default: [],
});
