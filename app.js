const TOKEN = 'token'
App({
  globalData:{
    token:''
  },
  onLaunch: function () {
    // 先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    //  判断token是否有值，或过期
    if(token && token.length !=0){
      //  验证token是否过期
      this.check_token(token)
    } else{
      this.login()
    }


    // 没有token，再重新获取登录
    


  },
  check_token(token){
    console.log("执行了验证操作")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:function (res) {
        console.log(res)
        
      },
      fail:function (err) {
        console.log(err)
      }
    })
  },
  login(){
    console.log("执行了登录操作")
  wx.login({
    success:(res) =>{
      const code = res.code;
      wx.request({
        url: 'http://123.207.32.32:3000/login',
        method:'POST',
        data:{
          code
        },
        success:(res)=> {
          const token = res.data.token;
          this.globalData.token = token;
          console.log(this.globalData.token)
          wx.setStorageSync(TOKEN, token)
        }
      })
    }
  })
}
})
