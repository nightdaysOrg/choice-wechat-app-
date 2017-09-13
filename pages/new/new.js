// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choiceItem:1,
    allName:[],
    choiceList:[],
    saveAll:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  addOne() {
    var num = this.data.choiceList + 1;
    this.setData({
      choiceList: num,
    })
  }
})