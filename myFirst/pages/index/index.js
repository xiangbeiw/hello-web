//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        logo:'/images/pro_01.jpg',
        title:'精英贷',
        desc: '22周岁以上既有\n最快三小时下载\n人均3万,最高30万',
      },
      {
        logo: '/images/pro_02.jpg',
        title: '月供贷',
        desc: '22周岁以上既有\n最快三小时下载\n人均3万,最高30万',
      },
      {
        logo: '/images/pro_03.jpg',
        title: '保单贷',
        desc: 'aaaa',
      }
    ],
  },
 
  onLoad: function () {
    this.setData({
      test:'01'
    })
  },
  toDetail: function (e){
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].title;
    console.log(index);
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title,
    })
  }
  

})
