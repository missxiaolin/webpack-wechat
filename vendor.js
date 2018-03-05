// 支持async await
import regeneratorRuntime from 'regenerator-runtime'
global.regeneratorRuntime = regeneratorRuntime

import _ from 'lodash'
global._ = _

import R from 'ramda'
global.R = R

import uiti from './utils/util'

global.uiti = uiti

const asyncWrap = fn => (option = {}) => new Promise((resolve, reject) => {
    let conf = {
        success: res => {
            console.log(res)
            resolve(res)
        },
        fail: err => {
            reject(err)
        }
    }
    wx[fn](R.merge(conf, options))
})

wx.getSystemInfoAsync = asyncWrap('getSystemInfo')
wx.loginAsync = asyncWrap('login')
wx.getUserInfoAsync = asyncWrap('getUserInfo')
wx.requestAsync = asyncWrap('request')

// 动画
global.requestAnimationFrame = callback => {
    const currentTime = new Date().getTime()
    const timeToCall = Math.max(0, 16 - (currentTime - lastTime))
    const timer = global.setTimeout(function () {
        callback(currentTime + timeToCall)
    }, timeToCall)

    lastTime = currentTime + timeToCall

    return timer
}

global.cancelAnimationFrame = timer => {
    clearTimeout(timer)
}

import TWEEN from 'tween.js'


TWEEN.now = function () {
    return new Date().getTime()
}


global.TWEEN = TWEEN