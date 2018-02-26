import regeneratorRuntime from 'regeneratorRuntime'

global.regeneratorRuntime = regeneratorRuntime

import uiti from './utils/util'

global.uiti = uiti

import R from 'ramda'
global.R = R

const asyncWrap = fn => (option = {}) => new Promise((resolve, reject) => {
    let conf = {
        success: res => {
            console.log(res)
            resolve(res)
        }
    }
    wx[fn](R.merge(conf, options))
})

wx.getSystemInfoAsync = asyncWrap('getSystemInfo')
wx.loginAsync = asyncWrap('login')
wx.getUserInfoAsync = asyncWrap('getUserInfo')
wx.reqAsync = asyncWrap('request')