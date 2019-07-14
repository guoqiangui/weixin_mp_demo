// components/page1/page1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 如果访问页面传入了参数，会赋值给属性
    // 如: page1/page1?username=Mike，那么username会赋值给username属性
    username: String
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
    onLoad() {
      // properties里面的属性也可以在data字段中访问到
      console.log('username: ' + this.data.username)
    }
  }
})
