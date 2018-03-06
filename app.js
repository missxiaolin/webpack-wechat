import './style/base.sass'
import './vendor'

App({
  onLaunch: function () {
    this.getUserInfo()
    console.log(1)
  },
  async getUserInfo () {
    if(this.globalData.userInfo) return this.globalData.userInfo
    const { code } = await wx.loginAsync()
    console.log(code)
    const { userInfo } = await wx.getUserInfoAsync()

    this.getUserInfo.userInfo = userInfo
  },
  globalData: {
    userInfo: null
  }
})