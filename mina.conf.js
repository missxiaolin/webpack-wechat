const { resolve } = require('path')
const r = url => resolve(__dirname, url)

module.exports = {
    "json": {
        "pages": [
            "pages/index/index"
        ],
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#fff",
            "navigationBarTitleText": "WeChat",
            "navigationBarTextStyle": "black"
        }
    },
    "style": {
        url: r('./style/base.sass'),
        lang: 'sass'
    },
    "app": r('./app.js')
}