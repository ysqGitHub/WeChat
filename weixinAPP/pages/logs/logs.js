
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

  formSubmit:function(e){
   
    var title = e.detail.value.newtitle;
    var laiyuan = e.detail.value.newlaiyuan;
    var content = e.detail.value.newcontent;

    wx.showLoading({
      title: '发布中...',
    })

    wx.request({
      url: 'http://yanshiqian.free.idcfengye.com/DynamicWeb/newsadd',
      data:{
        title: title,
        laiyuan: laiyuan,
        content: content
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      method: "POST",
      success:function(e){
        if(e.data==0){
          wx.hideLoading();
         wx.showToast({
            title: '发布成功',
            icon: 'success',            
            duration: 2000,
          })
        }else if(e.data==1){
          wx.hideLoading();
          wx.showToast({
            title: '失败 ',
            icon: 'none',
            duration: 2000,
          })
        }
      }
     
    })
    console.log(title);
    console.log(laiyuan);
    console.log(content);
  }
})