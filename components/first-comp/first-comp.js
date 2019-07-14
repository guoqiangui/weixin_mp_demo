// components/first-comp/first-comp.js
Component({
  options: {
    multipleSlots: true // 启用多组件
  },

  // 属性
  properties: {
    msg: {
      type: String,
      value: '这是第一个自定义组件' // 默认值
    }
  },

  // 数据
  data: {

  },

  // 自定义方法
  methods: {
    
  },

  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      console.log('attached in lifetimes')
    },
    moved() {
      // 在组件实例被移动到节点树另一个位置时执行
      console.log('moved in lifetimes')
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
      console.log('detached in lifetimes')
    }
  },

  // 生命周期函数也可以定义在外面，会被lifetimes里面同名的覆盖
  attached() {
    console.log('attached')
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数，不用加on了
    resize(res) {
      console.log('屏幕尺寸改变了，在Component内监听的')
    }
  }
})
