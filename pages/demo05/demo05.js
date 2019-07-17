Component({
  data: {
    // 初始数据
    numberA: 0,
    numberB: 0,
    sum: 0
  },

  attached() {
    // 小程序中这样是无法通知更新的，必须用setData来更改data
    // this.data.numberA = 3
    // this.data.numberB = 5

    this.setData({
      numberA: 3,
      numberB: 5
    })

    // 修改子数据字段，setData封装了对应的修改方法，语法一致
    this.setData({
      // 修改this.data.some.subfield
      'some.subfield': 'a new subfield value',
      // 修改this.data.arr[0]
      'arr[0]': 'Tommy',
      
      'some.field.name': '张三'
    })

    // this.setData({
    //   'some': '测试值'
    // })

  },

  observers: {
    // 同时观察多个数据
    'numberA, numberB': function (numberA, numberB) {
      // 相当于Vue中的计算属性的效果
      this.setData({
        sum: numberA + numberB
      })

      console.log(this.data.sum)
    },

    // 支持观察子数据字段
    'some.subfield': subfield => {
      console.log(subfield)
      // console.log('修改some也触发了')
    },

    // 这种子数据字段也可以是数组的某一项
    'arr[0]': newVal => {
      console.log(newVal)
    },

    // 可以使用通配符**监听所有子数据字段的变化
    'some.field.**': newVal => {
      console.log(newVal)
    },

    // 可以使用通配符**直接监听所有数据变化
    '**': newVal => {
      console.log(newVal)
    }
  }
})