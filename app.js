// 调用App()方法注册小程序
App({
  // 自定义的全局数据
  globalData: 1,

  onLaunch(options) {
    // 小程序启动的时候调用，整个小程序只启动一次


    // 获取场景值的两种方式
    // console.log(options.scene);
    // console.log(wx.getLaunchOptionsSync().scene);

    
    // 提示用户更新
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(res => {
      // 测试版没有更新，坑啊
      if (res.hasUpdate) {
        console.log('有更新')
      } else {
        console.log('暂无更新')
      }
    })

    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if(res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
  },

  onShow(options) {
    // 监听小程序启动或切前台
  },

  onHide() {
    // 监听小程序切后台
  },

  onError() {
    // 错误监听函数
  },

  onPageNotFound() {
    // 页面不存在监听函数
  }
});