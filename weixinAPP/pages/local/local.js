
//获取应用实例
const app = getApp()
/**地理位置 */
var QQMapWX = require('../../utils/aaa.js');
var qqmapsdk;

Page({
  data: {
    address:'',
    province: '',
    city: '',
    latitude: '',
    district:'',
    title:'',
    longitude: '',
    userInfo: {},
    district: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    author: '闫世前'
  },
  /**分享页面 */
  onShareAppMessage: function () {
    return {
      title: "测试分享页面",
      path: "/pages/index/index"
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //关闭程序
    /* if(options.finish){
       wx.navigateBack({
         delta:1
       })
     }*/
    /**地图 */
    qqmapsdk = new QQMapWX({
      key: '2UKBZ-DZ3C3-KFF3S-YBIJS-Z3RW3-MJBPJ' //这里自己的key秘钥进行填充
    });
    /**end 地图 */
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**地图start */
  onShow: function () {
    let vm = this;
    vm.getUserLocation();
  },
  /**地图end */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**地图start */
  getUserLocation: function () {
    let vm = this;
    wx.getSetting({
      success: (res) => {
        console.log(JSON.stringify(res))
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      vm.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
          vm.getLocation();
        } else {
          //调用wx.getLocation的API
          vm.getLocation();
        }
      }
    })
  },
  // 微信获得经纬度
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(JSON.stringify(res))
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        var district = res.district      
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },

  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        let district = res.result.ad_info.district
      

        vm.setData({     
          province: province,
          city: city,
          district: district,         
          latitude: latitude,
          longitude: longitude,
        })

      },
      fail: function (res) {
        console.log('///////////////////////   ' + res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  },
})