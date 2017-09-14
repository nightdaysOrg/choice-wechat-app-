// pages/choose/choose.js
Page({
  //  * 页面的初始数据
  data: {
    allName: [],
    choiceList: [],
    allList: [],
    saveAll: {},
    index:-1,
  },
  //  * 生命周期函数--监听页面加载
  onLoad: function (options) {
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
    wx.getStorage({
      key: 'choiceIndex',
      success: function (res) {
        that.setData({
          index: res.data.idx
        });
        console.log(that.data.index)
      },
    })
  },
  //  * 生命周期函数--监听页面显示
  onShow: function () {
    var arr=this.data.allList;
    var num=this.data.index;
    this.setData({
      choiceList:arr[num]
    })
    console.log(this.data.choiceList)
  },
})