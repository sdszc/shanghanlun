const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryData:'',
    addData:'',
    updateData:'',
    deleteData:''
  },
  getData:function(){// 查询
  
  },
  addData:function(){// 插入
    
  },
  updateData:function(){// 更新
    
  },
  deleteData:function(){// 删除
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var page = this
    // db.collection('fang_yao').get().then(
    //   res=>{
    //     var reset = res.data[0];
    //     console.log(reset);
    //     console.log(reset.fang_name);
    //     page.setData({
    //       queryData:reset.fang_name + reset.yao_name
    //     })
    //   }
    // )
    const _ = db.command
    db.collection('fang_yao').where({
      fang_name: _.eq('桂枝汤')
    }).get().then(
      res=>{
        console.log(res)
      }
    )
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
    
  }
})