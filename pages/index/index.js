//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    r: parseInt(Math.random() * 256),
    g: parseInt(Math.random() * 256),
    b: parseInt(Math.random() * 256),
    a: Math.random() * 0.3,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    var r = that.data.r;
    var g = that.data.g;
    var b = that.data.b;
    var a = that.data.a;
    var color = ('rgba(' + r + ',' + g + ',' + b + ',' + a + ')').toString(16)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: color,
      animation: {
        duration: 700,
        timingFunc: 'easeIn'
      }
    })
    wx.setNavigationBarTitle({
      title: '简介与提示'
    })
  },
  // 跳转new
  toNew(){
    wx.reLaunch({
      url: '../new/new',
    })
  },
  // 跳转list
  toList(){
    wx.reLaunch({
      url: '../list/list',
    })
  }
})
