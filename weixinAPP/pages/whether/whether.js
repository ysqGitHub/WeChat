var bmap = require('../../libs/bmap-wx.js');
Page({
  data: {
   
   city:'',
   pm:'',
   wendu:'',
   riqi:'',
  fengli:'',
    zhuangkuang:''
  },
 
  onLoad: function () {
   
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'fjiPpt05WshvI7kYO5mLAZKgwrMH4wef'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      var city = weatherData.currentCity;
      var pm = weatherData.pm25;
      var wendu = weatherData.temperature;
      var riqi = weatherData.date;
      var fengli = weatherData.wind;
      var zhuangkuang = weatherData.weatherDesc;
      
      that.setData({
       
        city: city,
        pm: pm,
        wendu: wendu,
        riqi: riqi,
        fengli: fengli,
        zhuangkuang: zhuangkuang
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  
  },
  


})