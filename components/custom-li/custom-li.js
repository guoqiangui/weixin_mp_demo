Component({
  relations: {
    '../custom-ul/custom-ul': {
      type: 'parent', // 关系在父组件和子组件都要定义，否则不生效
      linked(target) {
        console.log('我被插入到了custom-ul中')
      }
    }
  }
})