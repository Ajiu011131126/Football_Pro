// pages/players/players-init/players-init.js
const app = getApp();
Page({
 
  /**
   * 页面的初始数据
   */
  
  data: {
    usernickname:'',
    useravatarUrl:'',
    playerInfo:{
      heightArray:{
        name:'身高（cm)',
        index:19,
        data :['151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195','196','197','198','199','200']
      },
      weightArray:{
        name:'体重(kg)',
        index:25,
        data :['45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
      },
      age:{
        name:'年龄(岁)',
        index:20,
        data :['18-','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70+']
      },
      speedOneHundred:{
        name:'百米最好成绩（秒)',
        index:10,
        data :['10-','10.5','11','11.5','12','12.5','13','13.5','14','14.5','15','15.5','16','16.5','17','17.5','18','18.5','19','19.5','20','20+']
      },
      leg:{
        name:'惯用脚',
        data:['右脚','左脚'],
        index:0
      },
      position:{
        name:'擅长位置',
        data:['GK(门将)','CB(中后卫)','LSB(左边后卫)','RSB(右边后卫)','DMF(后腰)','LMF（中场左路)','RMF(中场右路)','AMF(前腰)','RF(右边锋)','LF(左边锋)','CF(中锋)','WF(影子前锋)'],
        index:0
      },
      score:{
        name:'得分属性',
        data:{
          name:['进攻','技术','意识','身体','位置','防御'],
          data:[6,6,6,6,6,6]
        }
      },
      honor:{
        name: '荣誉',
        data: {
          thisyearScore:{
            name : '赛季进球数',
            data : 0
          },
          thisyearAssist:{
            name:'本赛季助攻数',
            data: 0 
          },
          careerScore:{
            name:'进球总数'
          },
          careerAssist:{
            name:'助攻总数',
            data:0
          },
          teamBest:{
            name:'球队最好成绩',
            data:0
          },
          teamTotalChampion:{
            name:'球队冠军数',
            data:0
          }
        }
      },
      fance:{
        name : '粉丝',
        data :[]
      },
      team:{
        name :'球队',
        data:[],
        maxteam: 3
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: (options) => {
   console.log(options)
  },
  handleSaveInfo(){
    wx.showToast({
      title: '信息已保存',
    }),
    setTimeout(function() {
      wx.reLaunch({
        url: '/pages/players/player-info/player-info',
      })
    }, 1500)
  },
  
  handleQuit(){
    wx.navigateBack({
      delta: 1,
    })
  }

})