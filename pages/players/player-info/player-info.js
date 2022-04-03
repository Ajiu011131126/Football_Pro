// pages/players/player-info/player-info.js
Page({

  /**
   * 页面的初始数据
   */
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
      score:{
        attack:{
          id:0,
        name:'进攻',
        value: 9
        },
        technick:{
          id:1,
          name:'技术',
          value:7
        },
        position:{
          id:2,
          name:'位置',
          value:5
        },
        defence:{
          id:3,
          name:'防御',
          value:3
        },
        strength:{
          id:4,
          name:'力量',
          value:5
        },
        brain:{
          id:5,
          name:'配合',
          value:7
        }
        
      },
    honor:{
      
        thisyearScore:{
          name : '赛季进球数',
          value : 0
        },
        thisyearAssist:{
          name:'本赛季助攻数',
          value: 0 
        },
        careerScore:{
          name:'进球总数',
          value:0
        },
        careerAssist:{
          name:'助攻总数',
          value:0
        },
        teamBest:{
          name:'球队最好成绩',
          value:0
        },
        teamTotalChampion:{
          name:'球队冠军数',
          value:0
        }
      
    },
      
    fance:{
      name : '粉丝',
      value :['Mark','King']
    },
    team:{
      name :'球队',
      value:['光明顶FC','光明港竞技','狼盟联队'],
      teamnum: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var index= this.data.score.lenth;
    console.log(index)
  /*  for(let i =0;i<index;i++)
    {
    console.log(data.score.name[i])
    };
    */
  },
  handleEditPlayerInfo(){
    wx.navigateTo({
      url: '/pages/players/players-init/players-init',
    })
  },
  onShow: (e)=> {
    // 使用 wx.createContext 获取绘图上下文 context
   
    var context = wx.createCanvasContext('myCanvas');

    wx.getStorage({
        key:'array',
        success(res){
          console.log(res.tempfiles)
        }
      })
      context.moveTo(65, 20)
    context.lineTo(95.31, 47.5)
    context.lineTo(86.65, 77.5)
    context.lineTo(65, 80)
    context.lineTo(43.35, 77.5)
    context.lineTo(34.69, 47.5)
    context.lineTo(65, 20)
  
      context.setFillStyle('blue')
      context.fill()
    context.setLineDash([2,3])
    context.setStrokeStyle("black")
    context.moveTo(65, 15)
    context.lineTo(108, 40)
    context.lineTo(108, 90)
    context.lineTo(65, 115)
    context.lineTo(22, 90)
    context.lineTo(22, 40)
    context.lineTo(65, 15)
    context.moveTo(65, 27.5)
    context.lineTo(97.25, 46.25)
    context.lineTo(97.25, 83.75)
    context.lineTo(65, 102.75)
    context.lineTo(32.75, 83.75)
    context.lineTo(32.75, 46.25)
    context.lineTo(65, 27.5)
    context.moveTo(65, 40)
    context.lineTo(86.5, 52.5)
    context.lineTo(86.5, 77.5)
    context.lineTo(65, 90)
    context.lineTo(43.5, 77.5)
    context.lineTo(43.5, 52.5)
    context.lineTo(65, 40)
    context.setFontSize(10)

    context.fillText('进攻',60,12)
    context.fillText('技术',110,45)
    context.fillText('位置',110,100)
    context.fillText('防御',60,125)
    context.fillText('力量',0,100)
    context.fillText('配合',0,45)
    context.stroke()
    context.draw()
  
    }
  
})