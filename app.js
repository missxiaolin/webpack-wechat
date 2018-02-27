import './style/base.sass'
import './vendor'

App({
  onLaunch: function () {
    
  },
  async getUserInfo () {
    if(thi.globalData.userInfo) return this.globalData.userInfo
    const { code } = await wx.loginAsync()
    const { userInfo } = await wx.getUserInfoAsync()

    this.getUserInfo.userInfo = userInfo
  },
  globalData: {
    userInfo: null
  }
})