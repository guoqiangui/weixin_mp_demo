Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查询节点信息
    const query = wx.createSelectorQuery();
    query.select('.scroll-view')
      .fields({
        size: true
      }).exec(res => {
        console.log(res[0])
      })
    


    // 节点布局相交状态
    // wx.createIntersectionObserver(this, {
    //   thresholds: [0.2, 0.5]  // 两个阈值，代表相交20%和50%
    // }).relativeTo('.scroll-view').observe('.content', res => {
    //   // 可以看到，触发的时候可能不是刚刚好20%或50%，是差不多的样子，会有一点偏差
    //   console.log(res.intersectionRatio)
    // })


    wx.createIntersectionObserver(this, { thresholds: [0.3, 0.8] })
      .relativeTo('.scroll-view', {bottom: 50}) // 相当于给参照区域底部加宽了50px
      .observe('.content', res => {
        console.log(res.intersectionRatio)
      })


    // 查询屏幕显示区域尺寸（viewport）
    wx.createSelectorQuery()
      .selectViewport()
      .fields({size: true})
      .exec(res => {
        console.log(res[0].width) // 获取屏幕宽度
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 监听显示区域尺寸变化
   */
  onResize(res) {
    // console.log(res)
    console.log(`屏幕宽：${res.size.screenWidth}px, 屏幕高: ${res.size.screenHeight}px`)
    console.log(`视口宽: ${res.size.windowWidth}px, 视口高: ${res.size.windowHeight}px`)
  }
})