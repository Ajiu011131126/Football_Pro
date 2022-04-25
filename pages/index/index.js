
Page({
  onLoad(){
    wx.showModal({
      title:'FOOTBALL-ONLINE 请求',
      content:'获取你的信息:包括微信昵称、头像、openID',
      cancelText:'暂不登录',
      confirmText:'同意',
      confirmColor:'#5adb03',
      success(res){
        if(res.confirm){
          console.log('用户点击同意')
          wx.navigateTo({
            url: '/pages/players/players-init/players-init',
          })
        } else if(res.cancel){
          console.log('用户点击取消')
          wx.reLaunch({
            url: '/pages/home/home',
          })
        }
      },
      fail(err){
        console.log(err)
      }
    })

  }


})