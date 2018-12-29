// pages/selectCity/index.js
const app = getApp()
const config = app.globalData.config
const api = app.globalData.api
const util = app.globalData.util
const loading = app.globalData.loading
const regeneratorRuntime = require('../../lib/regenerator')
const indexBar = config.indexBar

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedArea:[]
  },

  ...loading,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
  },

  // 加载初始化缓存中已选择的城市列表
  async init() {
    await this.showLoading()
    await this.getCacheAreaList()
    await this.hideLoading()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})