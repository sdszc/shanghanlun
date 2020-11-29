// miniprogram/pages/third/third.js
const db = wx.cloud.database()
Page({

  data: {
    yao_name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this
    const _ = db.command
    db.collection('fang_yao').where({
      fang_name: _.eq('桂枝汤')
    }).get().then(
      res=>{
        console.log(res)
        page.setData({
          queryData:res.data
        })
      }
    )
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

  gotofifth:function(e){
    wx.navigateTo({
      url: '../fifth/fifth?yao_name=' + e.currentTarget.dataset.yaoname
    })
  },
})