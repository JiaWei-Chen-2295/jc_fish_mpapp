"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const formData = common_vendor.reactive({
      length: "",
      width: "",
      height: "",
      substrateType: 0,
      substrateThickness: "",
      hasLid: false,
      roomTemp: "",
      targetTemp: ""
    });
    const substrateTypes = ["无底砂", "细沙", "中沙", "粗沙"];
    const results = common_vendor.reactive({
      waterVolume: 0,
      substrateVolume: 0,
      substrateWeight: 0,
      filterFlowMin: 0,
      filterFlowMax: 0,
      lightPowerLED: 0,
      heaterPower: 0
    });
    const showResults = common_vendor.ref(false);
    const handleSubstrateChange = (e) => {
      formData.substrateType = e.detail.value;
    };
    const handleLidChange = (e) => {
      formData.hasLid = e.detail.value;
    };
    const calculate = () => {
      const waterVolume = formData.length * formData.width * formData.height / 1e3;
      results.waterVolume = waterVolume.toFixed(2);
      if (formData.substrateType !== 0) {
        const substrateVolume = formData.length * formData.width * formData.substrateThickness / 1e3;
        results.substrateVolume = substrateVolume.toFixed(2);
        results.substrateWeight = (substrateVolume * 1.6).toFixed(2);
      } else {
        results.substrateVolume = 0;
        results.substrateWeight = 0;
      }
      results.filterFlowMin = (waterVolume * 3).toFixed(0);
      results.filterFlowMax = (waterVolume * 5).toFixed(0);
      results.lightPowerLED = (waterVolume * 0.8).toFixed(0);
      const tempDiff = formData.targetTemp - formData.roomTemp;
      results.heaterPower = (waterVolume * 2.8 * (1 + tempDiff / 10)).toFixed(0);
      showResults.value = true;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: formData.length,
        b: common_vendor.o(($event) => formData.length = $event.detail.value),
        c: formData.width,
        d: common_vendor.o(($event) => formData.width = $event.detail.value),
        e: formData.height,
        f: common_vendor.o(($event) => formData.height = $event.detail.value),
        g: common_vendor.t(substrateTypes[formData.substrateType]),
        h: substrateTypes,
        i: formData.substrateType,
        j: common_vendor.o(handleSubstrateChange),
        k: formData.substrateType !== 0
      }, formData.substrateType !== 0 ? {
        l: formData.substrateThickness,
        m: common_vendor.o(($event) => formData.substrateThickness = $event.detail.value)
      } : {}, {
        n: formData.hasLid,
        o: common_vendor.o(handleLidChange),
        p: formData.roomTemp,
        q: common_vendor.o(($event) => formData.roomTemp = $event.detail.value),
        r: formData.targetTemp,
        s: common_vendor.o(($event) => formData.targetTemp = $event.detail.value),
        t: showResults.value
      }, showResults.value ? {
        v: common_vendor.t(results.waterVolume),
        w: common_vendor.t(results.substrateVolume),
        x: common_vendor.t(results.substrateWeight),
        y: common_vendor.t(results.filterFlowMin),
        z: common_vendor.t(results.filterFlowMax),
        A: common_vendor.t(results.lightPowerLED),
        B: common_vendor.t(results.heaterPower)
      } : {}, {
        C: common_vendor.o(calculate)
      });
    };
  }
};
wx.createPage(_sfc_main);
