// pages/games/solitaire-list/solitaire-list.js
Page({
  data:{
    battleType:{
     position1:{
     id:0,
      position:'门将GK',
     playernum:1
    },
  position2:{
    id:1,
    position:'中后卫CB',
    playernum:2
  },
  position3:{
    id:2,
    position:'右边后卫RB',
    playernum:1
  },
  position4:{
    id:3,
    position:'左边后卫LB',
    playernum:1
  },
  position5:{
    id:4,
    position:'后腰DMF',
    playernum:2
  },
  position6:{
    id:5,
    position:'中场右路RMF',
    playernum:1
  },
  position7:{
    id:6,
    position:'中场左路LMF',
    playernum:1
  },
  position8:{
    id:7,
    position:'前腰AMF',
    playernum:1
  },
  position9:{
    id:8,
    position:'前锋CF',
    playernum:3
  }
},
iconSize: [20, 30, 40, 50, 60, 70],
iconColor: [
  'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
],
iconType: [
  'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
],
gameDetail:{
  leagueName  :{
    name : '联赛名称',
    value : '五孔闸联赛'
  },
  date:{
    name :'日期',
    value :"2022年4月16日"
  },
  time:{
    name:'时间',
    value :"13:00"
  },
  add :{
    name : '地点',
    value : '革命公园'
  },
  hostTeam:{
    name : '主场球队',
    value :' 光明港竞技'
  },
  visitorTeam:{
    name : '客场球队',
    value :'慢三步'
  },

  playerNum:{
    name : '比赛模式',
    value : '9V9'
  },
  playerNum:{
    name : '比赛时间',
    value : '30分钟*3节'
  }

  },
  selectId:0
  },
  handleSelectIcon(){

  }

})