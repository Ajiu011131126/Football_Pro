// pages/team/team-total/team-total.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleTeam1(){
    wx.navigateTo({
      url: '/pages/team/team-info/team-info?code=1',
    })
  },
  handleTeam2(){
    wx.navigateTo({
      url: '/pages/team/team-info/team-info?code=0',
    })
  }
 
})