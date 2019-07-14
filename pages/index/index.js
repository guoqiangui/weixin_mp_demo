Page({
  data: {
    msg: 'Hello World!',
    array: [1, 2, 3, 4, 5],
    view: '詹姆斯',
    staffA: {
      firstName: 'firstName1',
      lastName: 'lastName1'
    },
    staffB: {
      firstName: 'firstName2',
      lastName: 'lastName2'
    },
    staffC: {
      firstName: 'firstName3',
      lastName: 'lastName3'
    },
    propValue: '测试值'
  },

  clickEvent(e) {
    console.log('你点击了我')

    // console.log(e.currentTarget)
    console.log(e.currentTarget.dataset.hahaHehe);  // 自动转成驼峰
  },

  outerEvent(e) {
    console.log(e.mark);  // 可以拿到2个mark
  },

  innerEvent(e) {
    console.log(e.mark);  // 也可以拿到2个mark
  },

  onLoad() {
    // console.log('监听页面加载');
  },

  onReady() {
    // console.log('页面首次渲染完成')

    // 导入common模块
    var common = require('../../test_module/common.js')

    common.sayHello('詹姆斯');
    common.sayGoodbye('杜兰特');


    // 修改全局数据
    var app = getApp();
    console.log(app.globalData)
    app.globalData ++;
    console.log(app.globalData)
  },

  onShow() {
    // console.log('监听页面显示')
  },

  onPullDownRefresh() {
    console.log('下拉了');
  }
});
