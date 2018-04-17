// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /* 分享功能 */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '分享首页',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  //播放音乐
  playerMusciTap: function(event){

    wx.playBackgroundAudio({
      dataUrl: 'http://vip.baidu190.com/uploads/2017/201704efb9adb62b702e205be9127b4c10cc43.mp3',
      title: '广东爱情故事',
      coverImgUrl: ''
    })
  
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var status = res.status
        if(status != 1){
          //没有播放
          wx.playBackgroundAudio({
            dataUrl: 'http://vip.baidu190.com/uploads/2017/201704efb9adb62b702e205be9127b4c10cc43.mp3',
            title: '广东爱情故事',
            coverImgUrl: ''
          })
        }else{
          wx.pauseBackgroundAudio()
        }
      }
    })
  }
  
})