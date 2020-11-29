// miniprogram/pages/fifth/fifth.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneQueryData : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var yao_name = options.yao_name
    const _ = db.command
    db.collection('fang_yao').where({
      yao_name: _.eq(yao_name)
    }).get().then(
      res=>{
        console.log(res)
        this.setData({
          oneQueryData:res.data
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
  //页面跳转
gotosecond:function(e){
  wx.navigateTo({
    url: '/pages/second/second'
  })
},
})

