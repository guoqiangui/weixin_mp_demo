// // computed计算属性的实现
// module.exports = Behavior({
//   lifetimes: {
//     created() {
//       this._originalSetData = this.setData
//       this.setData = this._setData
//     }
//   },

//   definitionFilter: function (defFields) {
//     // 获取computed属性的值，未定义就获取空对象
//     const computed = defFields.computed || {}
//     // 获取computed里面所有的键
//     const computedKeys = Object.keys(computed)
//     // 缓存的computed
//     const computedCache = {}

//     /**
//      * 计算computed，第二个参数为是否插入数据
//      */
//     const calcComputed = function (scope, insertToData) {
//       // 需要更新的数据
//       const needUpdate = {}

//       // 获取组件中的数据（避免未定义返回undefined，重新处理一下，起码返回空对象）
//       const data = defFields.data = defFields.data || {}

//       for (let key of computedKeys) {
//         // 获取对应key的值
//         const value = computed[key].call(scope)

//         if(computedCache[key] !== value) {
//           needUpdate[key] = computedCache[key] = value
//         }

//         if(insertToData) {
//           data[key] = needUpdate[key]
//         }
//       }

//       // 最后返回需要更新的数据
//       return needUpdate
//     }


//     // 重写setData方法
//     defFields.methods = defFields.methods || {}
//     defFields.methods._setData = function (data, callback) {
//       const originalSetData = this._originalSetData // 获取原始的setData方法
//       originalSetData.call(this, data, callback)
//       const needUpdate = calcComputed(this)
//       originalSetData.call(this, needUpdate)
//     }

//     // 初始化
//     calcComputed(defFields, true)
//   }
// })



module.exports = Behavior({
  lifetimes: {
    created() {
      // 保存一个旧的setData
      this._originalSetData = this.setData
      // 替换
      this.setData = this._setData
    }
  },

  definitionFilter: function (defFields) {
    const computed = defFields.computed || {}
    
    function calcComputed(scope) {
      var needUpdate = {}

      for (let key in computed) {

        const value = computed[key].call(scope) // 因为是方法，注意要更改this

        scope.data = scope.data || {}
        if (scope.data[key] !== value) {
          // 加入到needUpdate
          needUpdate[key] = value
        }

        // 将computed加入到data
        scope.data[key] = needUpdate[key]
      }

      return needUpdate
    }


    defFields.methods = defFields.methods || {}
    // 加强版的setData
    defFields.methods._setData = function (data, callback) {
      console.log(data)
      this._originalSetData(data, callback)

      const needUpdate = calcComputed(this)

      this._originalSetData(needUpdate)
    }

    // 初始化
    calcComputed(defFields)
    
  }
})