// pages/team/teamCpn/teamName/teamName.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    teamname:{
      type:String,
      value:'光明顶FC'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    observe(){
      wx.showToast({
        title: '关注成功',
        icon : 'success',
      })
    }
  }
})
