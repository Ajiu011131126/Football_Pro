// pages/team/team-info/team-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 0,
    teamname:'光明港FC'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
      this.setData({
        code : options.code
      })
     
    
  },
  handleEditTeamInfo(){
    wx.navigateTo({
      url: '/pages/team/team-init/team-init',
    })
  },
  handleEnterTeam(){
    wx.showModal({
      title:'申请已提交，请耐心等待领队审核',
      showCancel:false,
      confirmText:'确定',
    })
  },
  handleQuitTeam(){
    wx.showModal({
      title:'确定要退出球队？',
      cancelText:'点错了',
      confirmColor: 'red',
      confirmText:'确定',
    })
  },
  handleTeamMessage(){
    wx.navigateTo({
      url: '/pages/games/friendGameInfo/friendGameInfo',
    })
  },
  handleobserve(){
    wx.showToast({
      title: '关注成功',
      icon: 'success',
    })

  }

})