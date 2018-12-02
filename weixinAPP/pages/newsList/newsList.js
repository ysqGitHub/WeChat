// pages/newsList/newsList.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
   newsList: [],
  lujing:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中...',
    })
  },

  //跳转页面
  jumpDetails: function(e) {
    console.log(e.currentTarget.dataset.title);
    var title = e.currentTarget.dataset.title;
    var time = e.currentTarget.dataset.time;
    var source = e.currentTarget.dataset.source;
    var content = e.currentTarget.dataset.content;
    wx.navigateTo({
      url: '../news/news?dataList=' + title + "|" + time + "|" + source + "|" + content,
      success: function(res) {
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var this_ = this;
    wx.request({
      url: 'http://yanshiqian.free.idcfengye.com/DynamicWeb/news',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success(res) {
        wx.hideLoading();
        this_.setData({
          newsList: res.data,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  addImage: function() {
    console.log('-----------------');
   var that=this
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success: function (res) {
          console.log(res);
          that.setData({
            lujing: res.tempFilePaths[0],
          })
        }
      })
   
  },

 
})