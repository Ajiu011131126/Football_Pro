// pages/games/game-composing/game-composing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    league:{
      name:{
        name :'联赛名称',
        value:'五孔闸联赛2022年3月'
      },
      teamNum:{
        name:'参加队伍',
        value:10
      },
      gameAdd:{
        name:'比赛场地',
        value:'五孔闸'
      },
    
      startTime:{
        name:'联赛开始时间',
        value:'2022年4月25日'
      },
      deadLine:{
        name:'报名截止时间',
        value:'2022年4月18日'
      }
    },
    attendTeam:['/images/png/teams-on.png','/images/png/teams-off.png','/images/png/addPic.png','/images/png/teams-on.png','/images/png/teams-off.png','/images/png/addPic.png','/images/png/teams-on.png','/images/png/teams-off.png','/images/png/addPic.png']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  handleDelete(){
    wx.showModal({
      title :'是否删除这个队伍？',
      cancelText:'不删除',
      confirmText:'确认删除',
      confirmColor:'red',
    })
  },
  handleEdit(){
    wx.navigateTo({
      url: '/pages/games/creategames/creategames',
    })

  },
  handleQuit(){
    wx.navigateTo({
      url: '/pages/games/lggame/lggame',
    })
  },
  handleAdd(){
    wx.showToast({
      title:'添加一个队伍',
    })
  }
})