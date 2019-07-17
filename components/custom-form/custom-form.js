// components/custom-form/custom-form.js
var customFormControls = require('../custom-form-controls')

Component({
  relations: {
    'customFormControls': {
      type: 'descendant',
      target: customFormControls,  // 所有含有这个behavior的后代节点都会被关联
      linked(target) {
        console.log('有一个后代节点加入了我')
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
