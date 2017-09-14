// pages/new/new.js
Page({

  //  页面的初始数据
  data: {
    choiceItem: 1,
    allName: [],
    choiceList: [],
    allList: [],
    saveAll: {},
    inputValue: "",
    cname: "",
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {

  },
  //  生命周期函数--监听页面显示
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'listInfo',
      success: function (res) {
        console.log(res.data.name)
        console.log(res.data.list)
        that.setData({
          allName: res.data.name,
          allList: res.data.list,
        })
      },
    })
  },
  // 离开输入项目框
  leaveInput(e) {
    var val = e.detail.value;
    var that = this;
    if (val) {
      that.setData({
        inputValue: val,
      });
    }
  },
  // 离开名字
  leaveName(e) {
    var val = e.detail.value;
    var that = this;
    that.setData({
      cname: val
    })
  },
  // 增加一个项目框
  addOne() {
    var that = this;
    var arr = that.data.choiceList;
    if (that.data.inputValue) {
      arr.push(that.data.inputValue);
    }
    that.setData({
      choiceList: arr,
    });
    var num = this.data.choiceItem + 1;
    this.setData({
      choiceItem: num,
      inputValue: "",
    })
    console.log(that.data.choiceList)
  },
  // 提交按钮
  addAll() {
    var that = this;
    console.log(that.data.inputValue)
    var name = that.data.cname;
    var arr = that.data.choiceList;
    var nameArr = that.data.allName;
    var choiceArr = that.data.allList;
    var save = that.data.saveAll;
    if (name) {
      nameArr.push(name);
      choiceArr.push(arr);
      console.log(nameArr);
      console.log(choiceArr);
      save.name = nameArr;
      save.list = choiceArr;
      that.setData({
        allName: nameArr,
        allList: choiceArr,
        saveAll: save,
      })
      console.log(that.data.saveAll);
      wx.setStorage({
        key: 'listInfo',
        data: that.data.saveAll,
      })
      wx.reLaunch({
        url: '../list/list',
      })
    }
  },
  // reset
  reLaunch() {
    wx.reLaunch({
      url: '../new/new',
    })
  }
})