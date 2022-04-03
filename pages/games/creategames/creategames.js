// pages/games/creategames/creategames.js

  /**
   * 页面的初始数据
 
  data: {
    gameName:'',
    leagueGame:{
      teamNumber:{
        id : 0,
        name:'队伍数量',
        value:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      },
      
      holdPlace:{
        id : 1,
        name:'比赛场地(若有',
        value:['五孔闸','革命公园','魁浦','金山文体','光明港公园','南公园','万科金融港']
      }
     
    },

    startDate:{
      id : 1,
      name:'开赛时间',
      value:'2022年4月25日'
    },
    deadLine:{
      id: 3 ,
      name :'报名截止时间',
      value :'2022年4月18日'
    }
  }
})

*/
Page({
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    array1:[4,6,8,10,12,14,16,18,20],
    array2:['五孔闸','金山文体','革命公园','魁浦','光明港公园','万科金融港','金丰体育公园','沙滩公园'],
    objectArray2: [
      {
        id: 0,
        name: '五孔闸'
      },
      {
        id: 1,
        name: '金山文体'
      },
      {
        id: 2,
        name: '革命公园'
      },
      {
        id: 3,
        name: '魁浦'
      },
      {
        id: 4,
        name: '光明港公园'
      },
      {
        id: 5,
        name: '万科金融港'
      },
      {
        id: 6,
        name: '金丰体育公园'
      },
      {
        id: 7,
        name: '沙滩公园'
      }
    ],
    objectArray1: [
      {
        id: 0,
        name: '4'
      },
      {
        id: 1,
        name: '6'
      },
      {
        id: 2,
        name: '8'
      },
      {
        id: 3,
        name: '10'
      },
      {
        id: 4,
        name: '12'
      },
      {
        id: 5,
        name: '14'
      },
      {
        id: 6,
        name: '16'
      },
      {
        id: 7,
        name: '18'
      },
      {
        id: 8,
        name: '20'
      }
    ],
    index1: 3,
    index2:0,
    date1: '2022-04-15',
    date2: '2022-04-7',
    customItem: '全部'
  },
  bindPickerChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },

  bindDateChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChange2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  /*  事件监听函数  */
  handleCreate(){
    wx.showToast({
      title: '创建成功',
      icon: 'success',
    })
    setTimeout(function() {
      wx.reLaunch({
        url: '/pages/games/game-composing/game-composing',
      })
    }, 1500)
  }
})
