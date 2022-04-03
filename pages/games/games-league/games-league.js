/*
  Page({
    canvasIdErrorCallback: function (e) {
      console.error(e.detail.errMsg)
    },
    data:{
      
    },
    onLoad:(e)=>{
      var list = JSON.parse(e.caterary);
      console.log(list)
      var sinX = 0.866;
      var cosX = 0.500;
      var newLx1= 65;
      var newLy1= 65-list[0]*5;
      var newLx2= 65 + list[1]*5*sinX;
      var newLy2= 65 - list[1]*5*cosX;
      var newLx3= 65+ list[2]*5*sinX;
      var newLy3= 65+ list[2]*5*cosX;
      var newLx4= 65;
      var newLy4= 65+ list[3]*5;
      var newLx5= 65- list[4]*5*sinX;
      var newLy5= 65+ list[4]*5*cosX;
      var newLx6= 65- list[5]*5*sinX;
      var newLy6= 65- list[5]*5*cosX;
      var newList= [[newLx1,newLy1],[newLx2,newLy2],[newLx3,newLy3],[newLx4,newLy4],[newLx5,newLy5],[newLx6,newLy6]];
      wx.setStorage({
        key :'array',
        data : newList,
        success(res){
          console.log("arrList数据保存成功")
        }
      })
      
    },
   
    onShow: (e)=> {
      // 使用 wx.createContext 获取绘图上下文 context
     
      var context = wx.createCanvasContext('myCanvas');
      var arrList = wx.getStorageSync('array')
      console.log(arrList)
      context.moveTo(65, 15)
      context.lineTo(108, 40)
      context.lineTo(108, 90)
      context.lineTo(65, 115)
      context.lineTo(22, 90)
      context.lineTo(22, 40)
      context.lineTo(65, 15)
    
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
      context.fillText('跑位',0,45)
      context.stroke()
      context.draw()
    
      }
  })

*/
Page({
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 0,
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ], [
        {
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ], [
        {
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
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
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})

