// components/player-basic/player-basic.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    stylename:{
      type:Array,
      value:['名字','籍贯']
      }
    },
  observers:{
    counter:function(newVal){
      console.log(newVal)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    counter:2,
    minusDisplay:true
  },
  options:{
    multipleSlots:true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    dataAdd(){
      this.setData({
        counter:this.data.counter +1
        
      })
    },
    dataSub(){
      const counter = this.data.counter;
        if(counter != 0){
          this.setData({
            counter:this.data.counter -1
          })
        }
      }
    }
   
  }
)
