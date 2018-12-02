//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    userInfo: {},
    district: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  /**分享页面 */
  onShareAppMessage: function() {
    return {
      title: "测试分享页面",
      path: "/pages/index/index"
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {

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

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onShow: function(e) {
    this.setData({
      msgList: [{
        time: "2018年12月01日 11:43",
        source: " 环球时报",
        title: "阿根廷为G20峰会部署重兵,出动中国产装甲车布控街头",
        content: "当地时间11月30日至12月1日，G20国际峰会在阿根廷首都布宜诺斯艾利斯举行，阿根廷政府实施了严密的安保措施以确保峰会的安全。据阿根廷当地媒体报道称，作为安保行动的一部分，在峰会期间阿根廷政府将部署超过22，000名安保人员，还将出动大量军警车辆布控布宜诺斯艾利斯的重点区域。在这些车辆中，中国此前援助的东风“猛士”装甲车、“春风650TR-G”摩托车和北奔反恐卡车甚是抢眼。据阿根廷《民族报》早前报道称，为了支援本次G20峰会的安保工作，中国政府向阿根廷援助了价值1830万美元的安保设备。文章称，本次援助的车辆备包括30台大排量摩托车（“春风650TR-G”，装备有音视频实时连接装置，能够确保车辆与指挥中心的实时通讯）、4辆高机动轻型装甲车（东风“猛士”第三代装甲车）、1辆爆炸物扫描车和2辆卡车（北奔重卡），这些装备都非常适合在城市环境部署。除了车辆之外，中国还援助了87套爆炸物、金属探测仪、40件重型排爆防护服、20套排爆装置和45套X射线检测装置等其他设备。"
        },
        {
          time: "2018.11.26 18:05:00",
          source: "南华早报",
          title: "未放东风入紫荆：从美航母访港看香港特区的地缘战略价值",
          content: "据国内媒体援引港媒《南华早报》11月22日报道，美国核动力航母“里根”号连同3艘军舰于21日抵达中国香港地区访问，22日“里根”号停泊青衣对开海域时有中国香港民众登舰参观。其实在20日在“里根”号航母驶往香港途中，解放军驻港部队司令员谭本宏就已应邀乘坐美军军机先行登上航母，并观看了美国海军F-18“超级大黄蜂”战机的起飞和着舰演练。"
        },
        {
          time:"2018年12月01日 11:35",
          source:"观察者网",
          title: "美国防议员集体发声：军费太少不能满足大国竞争需求",
          content: "据美国海军研究协会网站（USNI）11月28日报道，美国参议院军事委员会（Senate Armed Services Committee）28日召开有关美国国防策略与发展的听证会。听证会结束后，军事委员会发布公告称，如果美国没有稳定增长的军费，以及一个清晰的国防策略，美国的国防战略将无法应对俄罗斯与中国。听证会一开始，资深外交官、参议员埃里克·埃德尔曼和退役海军上将加里·拉夫黑德一起表示，7330亿美元的国防预已经是“大国竞争”时代的“底线”或“下限”，如果低于7330亿美元，美军将无法完成核力量和常规力量的优势。"
        }
      ],

      msgList2: [{        
        title: "中国官宣已掌握“杀手锏”技术 从追赶者变身领跑者",        
      },
      {       
        title: "中美独有！现代航母这一关键技术其他222个国家全不会",
      },
      {        
        title: "中国用“北斗”摆脱对GPS依赖 美媒：中美对抗上升到天空",        
      }
      ],

      msgList3: [{
        title: "美国前总统老布什逝世！他曾与北京渊源甚深",
      },
      {
        title: "中国研制出首台高精度光刻机 让导弹打得更精准！",
      },
      {
        title: "驻京台媒倾巢出动 只为围堵这位大陆高官",
      }
      ]

    });
  },
//点击按钮
  dianji:function(){
    wx.navigateTo({
      url: '../newsList/newsList',
    })
  },

  tiaozhuan:function(e){
    var title = e.currentTarget.dataset.title;
    var time = e.currentTarget.dataset.time;
    var source = e.currentTarget.dataset.source;
    var content = e.currentTarget.dataset.content;
    wx.navigateTo({
      url: '../news/news?dataList=' + title + "|" + time + "|" + source + "|" + content,
    })
  },

logs:function(e){  
  var gongneng = e.currentTarget.dataset.gn;

  wx.navigateTo({
    url: '../logs/logs?gn=' +  gongneng,
  })
}

})