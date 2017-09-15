// pages/list/list.js
Page({

  //  * 页面的初始数据
  data: {
    allName: [],
    choiceList: [],
    allList: [],
    saveAll: {},
    r: parseInt(Math.random() * 256),
    g: parseInt(Math.random() * 256),
    b: parseInt(Math.random() * 256),
    a: Math.random() * 0.3,
  },

  //  * 生命周期函数--监听页面加载
  onLoad: function (options) {

  },


  //  * 生命周期函数--监听页面显示
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'listInfo',
      success: function (res) {
        console.log(res.data)
        that.setData({
          allName: res.data.name,
          allList: res.data.List,
          saveAll: res.data
        })
      },
    })
  },
  toChoice(e) {
    wx.setStorage({
      key: 'choiceIndex',
      data: e.currentTarget.dataset,
    });
    wx.reLaunch({
      url: '../choose/choose',
    })
  }

})