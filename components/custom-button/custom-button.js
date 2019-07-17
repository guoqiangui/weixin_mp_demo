// components/custom-button/custom-button.js
var customFormControls = require('../custom-form-controls')

Component({
  behaviors: [customFormControls],
  relations: {
    '../custom-form/custom-form': {
      type: 'ancestor',
      linked(target) {
        console.log('我button加入到了一个祖先节点中')
      }
    }
  },


  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
