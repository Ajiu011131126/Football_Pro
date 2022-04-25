{
  App({
    globalData: {
      caterary:[],
      token: '',
      userInfo:{
        nickName:'',
        avatarUrl:'',
        data:{
          height:170,
          weight:70,
          age: 35,
          speed:15,
          useleg:'右脚',
          position:['门将'],
          score:{

          },
          team:[]
        }
      },
      nickname:'username',
      useravatarUrl:'',
    },
    onLaunch: function(){
      wx.cloud.init({
        env:"cloud1-0g0lpkjq0971a198"
      }),
      wx.getUserInfo({
        success:(res)=>{
          const nickname = res.userInfo.nickName;
          console.log(nickname)
        }
      })
    /*
      wx.login({
        success:(res)=> {
          const code = res.code;
          method:'post',
          wx.request({
            url: 'http://123.207.32.32:3000/login',
            data:{
              code
            },
            
            success:(res) =>  {
              const token = res.data.token;
              this.globalData.token = token;
              console.log(this.globalData.token)
            }
          })
        }
      })
      */
    }
  })
}