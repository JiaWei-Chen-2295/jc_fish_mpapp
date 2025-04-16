"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const cartList = common_vendor.ref([]);
    const totalPrice = common_vendor.computed(() => {
      return cartList.value.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });
    common_vendor.onMounted(() => {
      initData();
    });
    const initData = () => {
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: cartList.value.length === 0
      }, cartList.value.length === 0 ? {} : {}, {
        b: common_vendor.t(totalPrice.value),
        c: cartList.value.length === 0
      });
    };
  }
};
wx.createPage(_sfc_main);
