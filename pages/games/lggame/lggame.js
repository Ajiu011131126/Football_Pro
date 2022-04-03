// pages/games/lggame/lggame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleEnterLeaguegames(){
    wx.navigateTo({
      url: '/pages/games/leagueDetail/leagueDetail',
    })
  },
  handleEnterLeaguegames2(){
    wx.navigateTo({
      url: '/pages/games/game-composing/game-composing',
    })
  },
  handleCreateGame(){
    wx.navigateTo({
      url: '/pages/games/creategames/creategames',
    })
  },
  handleCupGame(){
    wx.showToast({
      title: '暂无杯赛举办',
      icon:"error",
    })

  }

})