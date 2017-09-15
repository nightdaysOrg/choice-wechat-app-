// pages/choose/choose.js
Page({
  //  * 页面的初始数据
  data: {
    allName: [],
    choiceList: [],
    allList: [],
    saveAll: {},
    zindex: "",
    cindex: -1,
    w: "",
    h: "",
    r: parseInt(Math.random() * 256),
    g: parseInt(Math.random() * 256),
    b: parseInt(Math.random() * 256),
    a: Math.random() * 0.3,
  },
  //  * 生命周期函数--监听页面加载
  onLoad: function (options) {
    var that = this;
    // 获取listInfo
    var value1 = wx.getStorageSync('listInfo')
    if (value1) {
      that.setData({
        allName: value1.name,
        allList: value1.list,
        saveAll: value1
      })
    }
    // 获取index
    var value2 = wx.getStorageSync('choiceIndex')
    if (value2) {
      that.setData({
        zindex: value2.idx
      })
    }
  },

  //  * 生命周期函数--监听页面显示
  onShow: function () {
    var arr = this.data.allList;
    var n = parseInt(this.data.zindex);
    this.setData({
      choiceList: arr[n]
    });
    var x = this.data.choiceList.length;
    if (x >= 25) {
      this.setData({
        w: "7.5vh",
        h: "10vh",
      })
    }
    else if (x >= 16) {
      this.setData({
        w: "9vh",
        h: "9vh",
      })
    }
    else if (x >= 9) {
      this.setData({
        w: "12vh",
        h: "12vh",
      })
    }
    else if (x > 0) {
      this.setData({
        w: "15ch",
        h: "15vh",
      })
    }
  },
  // 选择按钮
  choiceClick() {
    var that = this;
    var num = that.data.choiceList.length;
    var i = 0;
    // 周期性定时器
    var timer = setInterval(function () {
      i++;
      var x = parseInt(Math.random() * num);
      that.setData({
        cindex: x,
      })
      // 结束条件
      if (i >=  num) {
        var arr = that.data.choiceList;
        var str = arr[x];
        // 结束周期定时器
        clearInterval(timer);
        timer = null;
        // 一次性定时器
        setTimeout(function () {
          wx.showModal({
            title: '已经帮您选出:',
            content: str,
            showCancel:false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }, 700)

      }
    }, 170)
  },
  // 返回按钮
  backToList() {
    wx.reLaunch({
      url: '../list/list',
    })
  }
})