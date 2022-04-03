// pages/games/games-friendgame/games-friendgame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friendTeam:'狼盟联队',
    date: '2022-03-29',
    time: '12:00',
    index:0,
    gamesadd:['五孔闸','魁歧革命公园','魁浦生态公园','光明港公园','万科金融港','金凤体育公园','超德中学','师大后场','金山文体'],
    gamestyle:['5V5','7V7','8V8','9V9','11V11'],
    gametime:['20分钟3节','30分钟2节','30分钟3节','45分钟2节','不论输赢，战到天昏地暗','自定义'],
    clothescolor:['白','红','黄','蓝','绿','橙','黑','粉','青'],
    number:['5','6','7','8','9','10','11','12','13','14','15','16','17','18','18+']
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  handleSent(){
    wx.showToast({
      title: '发送成功',
      icon: 'success',
    })
    setTimeout(function() {
      wx.reLaunch({
        url: '/pages/games/friendGameInfo/friendGameInfo',
      })
    }, 1500)

  },
  handleInput(){
    this.setData({
      
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})