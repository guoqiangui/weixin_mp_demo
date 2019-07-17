// 导入拥有computed功能的扩展
var computed = require('../../behaviors/computed.js')

Component({
  behaviors: [computed],

  data: {
    num1: 2,
    num2: 3
  },

  computed: {
    sum: function () {
      return this.data.num1 + this.data.num2
    }
  }
})