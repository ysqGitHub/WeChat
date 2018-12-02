// pages/camera/camera.js
Page({
  data: {
    tempFilePaths: ''
  },
  onLoad: function() {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseimage: function() {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })

  },

  chooseWxImage: function(type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function(res) {
        console.log(res);
        that.setData({
          tempFilePaths: res.tempFilePaths[0],
        })
      }
    })
  },

savePhone:function(){
  wx.getImageInfo({
    src: this.data.tempFilePaths,
    success: function (res) {
      var path = res.path;
      //保存图片到本地
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success: function () {
          wx.showToast({
            title: '保存成功'
          })
        },
        fail: function (res) {
          wx.showToast({
            title: '保存失败',
            icon: 'none'
          })
        }
      })
    }
  })
}


})