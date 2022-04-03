// pages/games/games-list/games-list.js
Page({

  /**
   * 页面的初始数据
   */
  
    data: {
      myteamname:'光明顶FC',
      iconSize: [20, 30, 40, 50, 60, 70],
      iconColor: [
        'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
      ],
      iconType: [
        'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
      ],
      code: 1,
      lenth: 0,
      caterary :[9,7,5,3,5,7],
 
      games:{
        first:{ 
          name :'光明港竞技',
          time :'2022年4月6日',
          add :'五孔闸'
       },
       second:{
         name : '师大养生', 
         time : '2022年4月11日',
         add  : '魁浦'
       },
       third:{
         name : '慢三步',
         time : '2022年4月18日',
         add : '革命公园'
       }
      }
  },

  
  onLoad:  (options)=> {
   /* console.log(options)
      const code = this.data.code;
      if(this.data.games==undefined || !JSON.stringify(this.data.games)){
        this.setData({
         code : false
        });
      } else{
        this.setData({
          code : true
        });
      }
      this.data.code = code;
    */
  },

  
  

  /**
   * 用户点击右上角分享
  


  handleCh:()=>{
    const code = this.data.code;
    if(code)
    {
    this.setData({
     code : false
    });
    } else {
      this.setData({
        code:true
      });

    }
    console.log(this.data.code)
  },
   */
  handleFrendGame(){
    console.log('点击跳转友谊赛')
    wx.navigateTo({
      url:"/pages/games/games-friendgame/games-friendgame"
    })
  },
  handleLeague(){
    console.log('点击跳转联赛')
    var caterary = JSON.stringify(this.data.caterary);
    wx.navigateTo({
      url: '/pages/games/games-league/games-league?caterary='+caterary
    })
  },
  handleLeague(){
    wx.navigateTo({
      url: '/pages/games/lggame/lggame',
    })
  }

})