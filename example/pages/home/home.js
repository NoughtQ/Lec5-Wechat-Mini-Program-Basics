// pages/home/home.js
// const app = getApp();
let cnt = 0;
let memes = ['67656/67656，他们喝下了云顶山泉水！', "Man! What can I say? Yunding out!"];

Page({

  /**
   * 页面的初始数据
   */


  data: {
    // date: app.globalData.date,
    message: 'hello',
    text: 'world!',
    array: ['gx', 'qzy', 'xyz'],
    name: 'gx',
    meme: '67656/67656，他们喝下了云顶山泉水！',
    cnt: 0,
  },
  meme: function(event) {
    cnt = 1 - cnt;
    this.setData({
      meme: memes[cnt],
    }, function () {
      wx.showToast({
        title: '操作完成',
        duration: 700
      });
    })
  },

  jump: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  inputName: function (e) {
    console.log(e),
      this.setData({
        name: e.detail.value,
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})