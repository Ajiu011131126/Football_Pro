// pages/team/team-init/team-init.js
Page({


  data: {
    inputValue:'' ,
     team:{
       type:Object,
       value:{
        name: '',
        emblem:'',
        about:'',
        announcement:'',
        members:{
          type:Object,
          value:{
            order: '',
            number:'',
            name:'',
            id:'',
            avatar:'/images/png/addPic.png'
            


           }
          }
        }
     }
  },

  handleSaveInfo(){
    wx.showToast({
      title: '提交成功',
      icon : 'success',
    }),
    setTimeout(function() {
      wx.reLaunch({
        url: '/pages/team/team-info/team-info',
      })
    }, 1500)
  },
  
  onLoad: function (options) {

  }
})