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
    wx.setNavigationBarTitle({
      title: '治好你的选择困难症'
    })
  },


  //  * 生命周期函数--监听页面显示
  onShow: function () {
    var that = this;
    var r=that.data.r;
    var g=that.data.g;
    var b=that.data.b;
    var a=that.data.a;
    var color = ('rgba(' + r + ',' + g + ',' + b + ',' + a + ')').toString(16)
    wx.getStorage({
      key: 'listInfo',
      success: function (res) {
        console.log(res.data)
        that.setData({
          allName: res.data.name,
          allList: res.data.list,
          saveAll: res.data
        })
      },
    });
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor:color,
      animation: {
        duration: 700,
        timingFunc: 'easeIn'
      }
    })
  },
  // 跳转选择
  toChoice(e) {
    wx.setStorage({
      key: 'choiceIndex',
      data: e.currentTarget.dataset,
    });
    wx.reLaunch({
      url: '../choose/choose',
    })
  },
  // 删除选项
  deleteClick(e) {
    var that = this;
    var idx = e.currentTarget.dataset.idx;
    console.log(idx);
    if (idx>=0) {
      var arrName = that.data.allName;
      var arrList = that.data.allList;
      var arrAll = that.data.saveAll
      var deleteOne = arrName[idx];
      var deleteTwo = arrList[idx];
      console.log(deleteOne);
      console.log(deleteTwo);
      console.log(arrAll);
      wx.showModal({
        title: '警告',
        content: "你将要删除:" + deleteOne,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            arrName.splice(idx, 1);
            arrList.splice(idx, 1);
            arrAll.name = arrName;
            arrAll.list = arrList;
            that.setData({
              allName:arrName,
              allList:arrList,
              saveAll:arrAll,
            })
            wx.setStorageSync('listInfo', that.data.saveAll);
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})