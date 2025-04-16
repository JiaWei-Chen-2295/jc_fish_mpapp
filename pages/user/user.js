"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userInfo = common_vendor.ref({});
    const menuList = common_vendor.ref([
      { title: "我的订单", path: "/pages/order/order" },
      { title: "收货地址", path: "/pages/address/address" },
      { title: "客服中心", path: "/pages/service/service" },
      { title: "设置", path: "/pages/settings/settings" }
    ]);
    common_vendor.onMounted(() => {
      initData();
    });
    const initData = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(userInfo.value.nickname || "未登录"),
        c: common_vendor.t(userInfo.value.phone || "点击登录"),
        d: common_vendor.f(menuList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
