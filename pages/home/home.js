// pages/home/home.js
const app = App();
const db = wx.cloud.database().collection("list")
let id = 0;
Page({

  data: {
   
    data:{
    height:{
      value:[170],
      name:'身高（cm)'
    },
    weight:{
      value:[70],
      name:'体重(kg)'
    },
    age: {
      value:[35],
      name:'年龄(岁)'
    },
    speed:{
      value:[15],
      name:'百米（秒)'
    },
    useleg:{
      value:['右脚'],
      name:'惯用脚'
    },
    position:{
      value:['门将'],
      name:'场上位置'
    }
  },
  currentIndex:0,
  code:''
  },
  handleLeagueGames(){
    wx.navigateTo({
      url: '/pages/games/lggame/lggame',
    })

  },
  handleNavitoPlayer(){
    wx.reLaunch({
      url: '/pages/players/player-info/player-info',
    })
  },
  handleNavitoTeam(){
    wx.reLaunch({
      url: '/pages/team/team-total/team-total',
    })
  },
  handleTeam(){
    wx.navigateTo({
      url: '/pages/team/team-info/team-info?code=1',
    })
  },
  handleNavi(){
    wx.navigateTo({
      url: '/pages/games/gameScore/gameScore',
    })
  },
  handleItemClick(){
    wx.navigateTo({
      url: '/pages/players/fance-message/fance-message',
    })

  },
  onLoad:function(){
    wx.login({
      success (res){
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://ic.snssdk.com/2/article/v25/stream/',
            data: {
              code: res.code
            }
          })
          console.log(res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  }
  
})