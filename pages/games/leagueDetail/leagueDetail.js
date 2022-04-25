// pages/games/leagueDetail/leagueDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leagueTeams:{
      type:Object,
      index_1:
      {
        name :'光明港',
        ranking:1
      },
      index_2:{ 
        name:'狼盟',
        ranking:2
      },
      index_3:{
        name:'光明顶FC',
        ranking:3
      },
      index_4:{
        name:'我是冠军',
        ranking:4
      },
      index_5:
      {
        name :'光明港',
        ranking:1
      },
      index_6:{ 
        name:'狼盟',
        ranking:2
      },
      index_7:{
        name:'光明顶FC',
        ranking:3
      },
      index_8:{
        name:'我是冠军',
        ranking:4
      },
      index_9:
      {
        name :'光明港',
        ranking:1
      },
      index_10:{ 
        name:'狼盟',
        ranking:2
      },
      index_11:{
        name:'光明顶FC',
        ranking:3
      },
      index_12:{
        name:'我是冠军',
        ranking:4
      }
      
    }
    
  },
  handleTitleClick(){
    wx.navigateTo({
      url: '/pages/games/gamesGoingon/gamesGoingon',
    })
  }
})