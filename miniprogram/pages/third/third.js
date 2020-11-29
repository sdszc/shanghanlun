// miniprogram/pages/third/third.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   data1:'桂枝汤证',
  //   array1:[
  //     {
  //       name:'桂枝',
  //       do:'去皮',
  //       liang:'三两'
  //     },
  //     {
  //       name:'芍药',
  //       do:'',
  //       liang:'三两'
  //     },
  //     {
  //       name:'生姜',
  //       do:'切',
  //       liang:'三两'
  //     },
  //     {
  //       name:'大枣',
  //       do:'擘',
  //       liang:'十二枚'
  //     },
  //     {
  //       name:'甘草',
  //       do:'炙',
  //       liang:'二两'
  //     }
  //   ],
  //   data2:'上五味，（口父）咀，以水七升，微火煮取三升，去滓，适寒温，服一升。服已须臾，啜热稀粥一升余，以助药力。温覆令一时许，遍身漐漐微似有汗者益佳，不可令如水流漓，病者必不除。若一服汗出病瘥，停后服，不必尽剂；若不汗，更服依前法，又不汗，后服小促其间，半日许令三服尽。若病重者，一日一夜服，周时观之。服一剂尽，病证犹在者，更作服；若汗不出，乃服至二三剂。禁生冷、黏滑、肉面、五辛、酒酪、臭恶等物。'
  // },

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