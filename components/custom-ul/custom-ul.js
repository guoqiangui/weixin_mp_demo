Component({
  relations: {
    '../custom-li/custom-li': {
      type: 'child',
      linked(target) {
        console.log('custom-li被插入到我(custom-ul)这里了')
      }
    }

  }
})